// This workaround is used from https://github.com/wong2/chat-gpt-google-extension/
async function* streamAsyncIterable(stream) {
    const reader = stream.getReader();
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          return;
        }
        yield value;
      }
    } finally {
      reader.releaseLock();
    }
  }
  
  async function fetchSSE(resource, options) {
    const { onMessage, ...fetchOptions } = options;
    const resp = await fetch(resource, fetchOptions);
    const parser = createParser((event) => {
      if (event.type === "event") {
        onMessage(event.data);
      }
    });
    for await (const chunk of streamAsyncIterable(resp.body)) {
      const str = new TextDecoder().decode(chunk);
      parser.feed(str);
    }
  }
  
  var KEY_ACCESS_TOKEN = ''
  
  async function getAccessToken() {
    if (KEY_ACCESS_TOKEN) {
      return KEY_ACCESS_TOKEN
    }
    const resp = await fetch("https://chat.openai.com/api/auth/session")
      .then((r) => r.json())
      .catch(() => ({}));
    if (!resp.accessToken) {
      throw new Error("UNAUTHORIZED");
    }
    KEY_ACCESS_TOKEN = resp.accessToken
    return resp.accessToken;
  }
  
  async function getAnswer(question, callback) {
    const accessToken = await getAccessToken();
    await fetchSSE("https://chat.openai.com/backend-api/conversation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        action: "next",
        messages: [
          {
            id: '12344567lkahaoinaf',
            role: "user",
            content: {
              content_type: "text",
              parts: [question],
            },
          },
        ],
        model: "text-davinci-002-render",
        parent_message_id: uuidv4(),
      }),
      onMessage(message) {
        console.debug("sse message", message);
        if (message === "[DONE]") {
          return;
        }
        const data = JSON.parse(message);
        const text = data.message?.content?.parts?.[0];
        if (text) {
          callback(text);
        }
      },
    });
  }
  
  chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener(async (msg) => {
      console.debug("received msg", msg);
      try {
        await getAnswer(msg.question, (answer) => {
          port.postMessage({ answer });
        });
      } catch (err) {
        console.error(err);
        port.postMessage({ error: err.message });
      }
    });
  });