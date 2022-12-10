/*global chrome*/
import React, { MutableRefObject } from 'react'
import { Command } from 'cmdk'
import { Logo } from '../../components'
import { ArrowLeftIcon, ArrowTopRightIcon, ChatBubbleIcon, ComponentBooleanIcon, EyeClosedIcon, FileTextIcon, GitHubLogoIcon, Half2Icon, MagnifyingGlassIcon, QuoteIcon, ReaderIcon, ShuffleIcon, TextAlignBottomIcon, TextIcon } from '@radix-ui/react-icons'
import { wikidarkmodecss } from '../../styles/wiki-darkmode'
import MarkdownIt from 'markdown-it'

interface SectionDict {
  [key: string]: string | undefined
}

interface OptDict {
  [key: string]: boolean
}

function parseCookie() {
  const cookie = getCookie('arc-cmdk')
  const parts = cookie.split('+')
  parts.forEach((p) => {
    const [optName, val] = p.split(':')
    if (val === 'true') {
      applyOption(optName)
    }
  })
}

function applyOption(optName: string) {
  switch (optName) {
    case 'dm':
      // Check first if it's already active
      const id = 'boostDarkmode'
      const isActive = document.getElementById(id)
      if (isActive) {
        break
      } else {
        // If not, toggle it to active:
        toggleDarkMode('')
      }
      break
    case 'focus':
      const nav = document.getElementById('mw-navigation')
      const focusIsActivated = nav?.style.visibility == 'hidden' ? true : false
      if (focusIsActivated) {
        break
      } else {
        toggleFocusMode('')
      }
      break
    case 'matcharc':
      const activeTheme = document.getElementById('arc-theme')
      if (activeTheme) {
        break
      } else {
        matchArcTheme()
      }
      break
    default:
      console.error('Unexpected option for cookie: ', optName)
  }
}

function changeCookieOption(optName: string, val: boolean) {
  const cookie = getCookie('arc-cmdk')
  const replaceString = optName + ':' + !val
  const newCookie = cookie.replace(replaceString, optName + ':' + val)
  // console.log('Set cookie from ', cookie)
  // console.log('To ', newCookie)
  setCookie('arc-cmdk', newCookie, 100)
}

function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname: string) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function jumpToSection(sectionLinkDict: SectionDict, sectionName: string) {
  const key = sectionName.replace(' jumptosection', '')
  const link = sectionLinkDict[key]
  if (link) {
    window.location.href = link!
  } else {
    // console.log("Didn't work: ", sectionLinkDict, key)
  }
  const root = document.getElementById('root')
  if (root) {
    root.style.visibility = 'hidden'
  }
}

function getSectionLinkDict(sectionDict: SectionDict) {
  const titles = Object.keys(sectionDict)
  const sectionLinkDict: SectionDict = {}

  for (let i = 0; i < titles.length; i++) {
    const title = titles[i]
    var wikiLink = window.location.href
    if (wikiLink.includes('#')) {
      wikiLink = wikiLink.substring(0, wikiLink.indexOf('#'))
    }

    let link
    if (wikiLink.endsWith('/')) {
      link = wikiLink.substring(0, wikiLink.indexOf('/')) + '#' + title.replace(" ", "_")
    } else {
      link = wikiLink + "#" + title.replaceAll(" ", "_")
    }
    sectionLinkDict[title] = link
  }

  return sectionLinkDict
}

function matchArcTheme() {
  const standard = document.documentElement.style.getPropertyValue(
    '--arc-palette-hover'
  )

  if (!standard) {
    // console.log("Please enable Arc Theme access in the advanced options of Arc :) (You may need to restart Arc to apply the changes)")
    return
  }

  // Deactivate dark theme if active
  const id = 'boostDarkmode'
  const activeDarkmode = document.getElementById(id)
  if (activeDarkmode) {
    var styleSheet = document.getElementById(id)
    styleSheet?.remove()
    changeCookieOption('dm', false)
  }

  const activeTheme = document.getElementById('arc-theme')
  const content = document.querySelector('#content')
  const body = document.querySelector('body')
  const head = document.querySelector('#mw-page-base')
  if (activeTheme) {
    activeTheme.remove()
    changeCookieOption('matcharc', false)
    if (content) {
      // @ts-ignore
      content!.style.backgroundColor = 'white'
    }
    body!.style.backgroundColor = 'white'
    if (head) {
      // @ts-ignore
      head!.style.visibility = 'visible'
    }
  } else {
    changeCookieOption('matcharc', true)
    // Create element which spans entire website, z-index=-1
    const div = document.createElement('div')
    div.id = 'arc-theme'
    div.style.display = 'block'
    div.style.position = 'fixed'
    div.style.inset = '0'
    div.style.zIndex = '-1'

    const tripleGradient = document.documentElement.style.getPropertyValue(
      '--arc-background-gradient-overlay-color0'
    )

    const doubleGradient = document.documentElement.style.getPropertyValue(
      '--arc-background-gradient-color0'
    )

    const simpleColour = document.documentElement.style.getPropertyValue(
      '--arc-background-simple-color'
    )

    const standard = document.documentElement.style.getPropertyValue(
      '--arc-background-gradient-color1'
    )

    if (tripleGradient) {
      div.style.opacity = '1'
      div.style.background = 'linear-gradient(132deg, var(--arc-background-gradient-color0) 0.00%, var(--arc-background-gradient-color1) 50.00%, var(--arc-background-gradient-overlay-color1)'
    } else if (doubleGradient && standard != '#17011EFF') {
      div.style.opacity = '1'
      div.style.background = 'linear-gradient(132deg, var(--arc-background-gradient-color0) 0.00%, var(--arc-background-gradient-color1) 100.00%'
    } else if (simpleColour) {
      div.style.backgroundColor = 'var(--arc-background-simple-color)'
      div.style.opacity = '0.3'
    } else if (standard) {
      // console.log("Configure an Arc Theme first! (And then trigger the command twice because there is a strange bug...)")
    } else {
      // console.log("Please enable Arc Theme access in the advanced options of Arc :) (And then trigger the command twice because there is a strange bug...)")
    }

    if (content) {
      // @ts-ignore
      content!.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    }
    body!.style.backgroundColor = 'rgba(0, 0, 0, 0)'

    if (head) {
      // @ts-ignore
      head!.style.visibility = 'hidden'
    }
    document.body.prepend(div);
  }


  // Make content have no background color



  // const head = document.querySelector('#mw-head')
  // // @ts-ignore
  // content!.style.backgroundColor = 'var(--arc-background-gradient-color0)'
  // @ts-ignore
  // head!.style.backgroundColor = 'var(--arc-background-gradient-color0)'

}

function askQuestionAboutArticle(articleTitle: string, question: string) {
  const query = 'Consider ' + articleTitle + "and tell me: " + question
  // console.log("sending query: ", query)
  window.postMessage("QUERY=" + query)
}

function simplifySection(sectionDict: SectionDict, section: string) {
  const query = 'Tell me the meaning of the following text in simple words: ' + sectionDict[section.replace(" summarisesimplifysection", '')]
  window.postMessage("QUERY=" + query)
}
function summariseSection(sectionDict: SectionDict, section: string) {
  const query = 'Summarise this text: ' + sectionDict[section.replace(" summarisesimplifysection", '')]
  window.postMessage("QUERY=" + query)
}

function askGeneralQuestion(query: string) {
  window.postMessage("QUERY=" + query)
}

function searchWiki(query: string) {
  window.location.assign('https://en.wikipedia.org/wiki/' + query.replace(' ', '_'))
}

function callTAFPage(s: string) {
  // Format: october_2,_2022
  let d = new Date();
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);

  const wikidate = `${mo}_${da},_${ye}`
  window.location.assign('https://en.wikipedia.org/wiki/Wikipedia:Today%27s_featured_article/' + wikidate)
}

function randomWikiPage(s: string) {
  window.location.assign('https://en.wikipedia.org/wiki/Special:Random')
}

function toggleFocusMode(s: string) {
  // First thing: try to get a specific element from wiki page and print it to console
  const nav = document.getElementById('mw-navigation')
  const footer = document.getElementById('footer')
  const content = document.getElementById('content')
  const body = document.querySelector('body')
  const pageBase = document.querySelector('#mw-page-base')

  const focusIsActivated = nav?.style.visibility == 'hidden' ? true : false

  if (!focusIsActivated) {
    // @ts-expect-error
    nav.style.visibility = 'hidden'
    // @ts-expect-error
    footer.style.visibility = 'hidden'
    // @ts-expect-error
    content.style.marginLeft = '5em'
    // @ts-expect-error
    content.style.marginRight = '5em'
    // // @ts-expect-error
    // content.style.borderRightWidth = '1px'
    // @ts-expect-error
    body.style.backgroundColor = '#ffffff'
    // @ts-expect-error
    pageBase.style.visibility = 'hidden'
    // @ts-expect-error
    content.style.border = '0px solid #ffffff'
    changeCookieOption('focus', true)
  } else {
    // @ts-expect-error
    nav.style.visibility = 'unset'
    // @ts-expect-error
    footer.style.visibility = 'unset'
    // @ts-expect-error
    content.style.marginLeft = '10em'
    // // @ts-expect-error
    // content.style.borderRightWidth = '0'
    // @ts-expect-error
    body.style.backgroundColor = '#f6f6f6'
    // @ts-expect-error
    pageBase.style.visibility = 'visible'
    // @ts-expect-error
    content.style.border = '1px solid #a7d7f9'
    changeCookieOption('focus', false)
  }

  // Determine via visibility of a specific element which is always there whether focus mode
  // is activated or not
}

function toggleDarkMode(s: string) {
  const activeTheme = document.getElementById('arc-theme')
  if (activeTheme) {
    activeTheme.remove()
    changeCookieOption('matcharc', false)
  }

  const id = 'boostDarkmode'
  const isActive = document.getElementById(id)
  if (isActive) {
    var styleSheet = document.getElementById(id)
    styleSheet?.remove()
    changeCookieOption('dm', false)
  } else {
    const styleSheet = document.createElement('style')
    styleSheet.innerText = wikidarkmodecss
    styleSheet.id = id
    document.head.appendChild(styleSheet)
    changeCookieOption('dm', true)
  }
}

function QueryField({ inputRef, queryHandlerId, setVisibility, setPages, pages, shouldSetPage, setShouldSetPage }: {
  inputRef: HTMLInputElement | null,
  queryHandlerId: string,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
  setPages: any,
  pages: any,
  newPage: string,
  shouldSetPage: any
  setShouldSetPage: any
}) {
  const [query, setQuery] = React.useState('')
  const handleSubmission = function (e: any) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
      if (query) {
        if (shouldSetPage) {
          setPages([...pages, shouldSetPage])
          // setShouldSetPage('')
        }
        switch (queryHandlerId) {
          case "searchWiki": searchWiki(query)
            break
          case "askGeneralQuestion": askGeneralQuestion(query)
            break
          case "askQuestionAboutArticleContent":
            const articleTitle = document.querySelector("h1")!.innerText
            askQuestionAboutArticle(articleTitle, query)
            break
          default:
          // console.log("Invalid queryHandlerId: ", queryHandlerId)
        }

        if (!shouldSetPage) {
          setVisibility(false)
        }
      }
    } else if (keyCode == 'Escape') {
      setQuery('')
      setVisibility(false)
      if (shouldSetPage) {
        setShouldSetPage('')
      }
    }
  }

  // Use for items where further user input is expected
  // If user submits, take input and execute onSubmit with it


  // For items which use QueryField: have a state tracker which, if set to true, enables rendering of queryfield.
  // Items which use Queryfield should set that state tracker to true, and set onSubmit to a different function (also via state tracker?)

  return (
    <Command.Input
      // @ts-expect-error
      ref={inputRef}
      style={{ paddingRight: '10px', padding: '6.5px 16px' }}
      value={query} onValueChange={setQuery}
      autoFocus
      placeholder='Enter query...' onKeyDown={handleSubmission}
    />
  )
}

export function RaycastCMDK() {
  if (!getCookie('arc-cmdk')) {
    // console.log('Creating new cookie.')
    const optStr = 'dm:false+focus:false+matcharc:false'
    setCookie('arc-cmdk', optStr, 100)
    // console.log("Created cookie: ", getCookie('arc-cmdk'))
  }

  parseCookie()

  const markdown = new MarkdownIt()
  const sectionDict = getSections()
  const sectionLinkDict = getSectionLinkDict(sectionDict)
  // console.log(sectionLinkDict)

  const theme = 'light'
  const [value, setValue] = React.useState('linear')
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const queryInputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  const [pages, setPages] = React.useState([])
  const page = pages[pages.length - 1]

  const [showQueryInput, setShowQueryInput] = React.useState(false)

  const resetVisibility = () => {
    setShowQueryInput(false)
    inputRef?.current?.focus()
  }

  const [gptAnswer, setGptAnswer] = React.useState('')

  React.useEffect(() => {
    if (gptAnswer.includes("ANSWER=")) {
      const answer = document.querySelector("#answer")
      if (answer) {
        answer.innerHTML = markdown.render(gptAnswer.replace('ANSWER=', ''));
      }
    }
  }, [gptAnswer])

  window.addEventListener("message", (e) => {
    const payload = e.data
    if (payload.includes("QUERY=")) {
      setGptAnswer('loading')
    }
    if (payload.includes("ANSWER=")) {
      const answer = e.data.replace("ANSWER=", "")
      // console.log("Received answer:", answer)
      setGptAnswer('ANSWER=' + answer)
    } else if (payload.includes("ERROR=")) {
      const error = e.data.replace("ERROR=", "")
      // console.log("Encountered error:", error)
      if (error == 'login') {
        setGptAnswer('ERROR=login')
      } else {
        setGptAnswer('ERROR=unknown')
      }
    }
  })


  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  function activateQueryField(queryHandlerId: string) {
    setShowQueryInput(true)
    queryInputRef?.current?.focus()
    setQueryHandlerId(queryHandlerId)
  }

  const [queryHandlerId, setQueryHandlerId] = React.useState('Please change the query handler id where necesseray')
  const [shouldSetPage, setShouldSetPage] = React.useState('')

  return (
    <>
      <div className="arc-boost-exit" onClick={() => {
        const root = document.getElementById('root')
        if (root) {
          root.style.visibility = 'hidden'
        }
      }}></div>
      <div id='cmdk' className="raycast">
        <Command className='cmdk-topelement' value={value} onValueChange={(v) => setValue(v)}
          onKeyDown={(e) => {
            // Escape goes to previous page
            // Backspace goes to previous page when search is empty


            if (e.key == 'Escape' || (e.key === 'Backspace' && !value)) {
              e.preventDefault()

              // If query visibility is false, input field value is '', pages length 0 ==> can exit
              if (!showQueryInput && !inputRef.current?.value && pages.length == 0) {
                const root = document.getElementById('root')
                e.preventDefault()
                if (root) {
                  root.style.visibility = 'hidden'
                }
              }

              if (page === 'gptAnswer') {
                setGptAnswer('')
              }
              setPages((pages) => pages.slice(0, -1))
            } else if (
              (!e.ctrlKey) ||
              e.key === "Meta" ||
              e.key === "Shift" ||
              e.key === "alt"
            ) {
              return;
            }

            // At this point we know user is pressing only alt key of the meta keys
            if (e.key === 'k') {
              const root = document.getElementById('root')
              e.preventDefault()
              if (root) {
                root.style.visibility = 'hidden'
                root.setAttribute('visibilityChanged', 'true')
              }
            }
          }}
        >
          <div cmdk-raycast-top-shine="" />
          <div className='raycast-inputs' style={pages.length > 0 ? { marginLeft: '15px' } : {}}>
            {pages.length > 0 && (
              <button style={{ flex: '0 0px', cursor: 'pointer' }} onClick={() => {
                setPages((pages) => pages.slice(0, -1))
                setShowQueryInput(false)
                inputRef?.current?.focus()
              }}>
                <Logo>
                  <ArrowLeftIcon
                    style={{
                      width: 12,
                      height: 12,
                    }}
                  />
                </Logo>
              </button>
            )}
            <Command.Input ref={inputRef} style={{ flex: '6 285px' }} autoFocus placeholder="Search commands..." />
            {showQueryInput
              ?
              <Command className='cmd-query'>

                <QueryField
                  // @ts-expect-error
                  inputRef={queryInputRef}
                  queryHandlerId={queryHandlerId}
                  setVisibility={resetVisibility}
                  setPages={setPages}
                  pages={pages}
                  shouldSetPage={shouldSetPage}
                  setShouldSetPage={setShouldSetPage}
                />
              </Command>
              : <></>
            }
          </div>
          <hr cmdk-raycast-loader="" />
          <Command.List ref={listRef}>
            {!page && (
              <>
                <Command.Empty>No results found.</Command.Empty>
                <Command.Group heading="Navigation">
                  <Item isCommand value="Search Wikipedia" onSelect={activateQueryField} queryHandlerId="searchWiki" inputRef={inputRef}>
                    <Logo>
                      <MagnifyingGlassIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Search Wikipedia
                  </Item>
                  <Item isCommand value="Show Today's Featured Article" onSelect={callTAFPage} inputRef={inputRef}
                  >
                    <Logo>
                      <FileTextIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Show Today's Featured Article
                  </Item>
                  <Item isCommand value="Show Random Article" onSelect={randomWikiPage} inputRef={inputRef}
                  >
                    <Logo>
                      <ShuffleIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Show Random Article
                  </Item>
                  <Item isCommand value="Jump to Section" setPages={setPages} page='sectionJumpPage' pages={pages} inputRef={inputRef}
                  >
                    <Logo>
                      <ArrowTopRightIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Jump to Section
                  </Item>
                </Command.Group>
                <Command.Group heading="AI Helper">
                  <Item value="Ask General Question" onSelect={activateQueryField}
                    queryHandlerId="askGeneralQuestion" setPages={setPages} page='gptAnswer' pages={pages}
                    setShouldSetPage={setShouldSetPage}
                    inputRef={inputRef}

                  >
                    <Logo>
                      <ChatBubbleIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Ask General Question
                  </Item>
                  <Item value="Ask Question About Article Topic" onSelect={activateQueryField} queryHandlerId="askQuestionAboutArticleContent"
                    setPages={setPages} page='gptAnswer' pages={pages} setShouldSetPage={setShouldSetPage} inputRef={inputRef}
                  >
                    <Logo>
                      <ReaderIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Ask Question About Article Topic
                  </Item>
                  <Item value="Summarise Section" setPages={setPages} page='sectionGPTPage' pages={pages} inputRef={inputRef}
                  >
                    <Logo>
                      <QuoteIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Summarise Section
                  </Item>
                  <Item value="Simplify Section" setPages={setPages} page='simplifySectionPage' pages={pages}
                    inputRef={inputRef}

                  >
                    <Logo>
                      <TextAlignBottomIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Simplify Section
                  </Item>
                </Command.Group>
                <Command.Group heading="Appearance">
                  <Item isCommand value="Toggle Focus Mode" onSelect={toggleFocusMode} inputRef={inputRef}
                  >
                    <Logo>
                      <EyeClosedIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Toggle Focus Mode
                  </Item>
                  <Item isCommand value="Toggle Dark Mode" onSelect={toggleDarkMode} inputRef={inputRef}
                  >
                    <Logo>
                      <Half2Icon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Toggle Dark Mode
                  </Item>
                  <Item isCommand value="Match Arc Theme Matching" onSelect={matchArcTheme} inputRef={inputRef}
                  >
                    <Logo>
                      <ComponentBooleanIcon
                        style={{
                          width: 12,
                          height: 12,
                        }}
                      />
                    </Logo>
                    Toggle Arc Theme Matching
                  </Item>
                </Command.Group>
              </>
            )}
            {page === 'gptAnswer' && gptAnswer.includes("ANSWER=") && (
              <>
                <div className='gptAnswer'>
                  <h3>ChatGPT Answer</h3>
                </div>
                <div className='gptAnswer github-markdown-body' id='answer'>
                </div>
              </>
            )}
            {page === 'gptAnswer' && gptAnswer === 'ERROR=login' && (
              <>
                <div className='gptAnswer'
                >
                  <h3>ChatGPT Answer</h3>
                </div>
                <div className='gptAnswer'>
                  <p>You need to login at <a href="https://chat.openai.com" target="_blank">chat.openai.com</a> first.</p>
                </div>
              </>
            )}
            {page === 'gptAnswer' && gptAnswer === 'ERROR=unknown' && (
              <>
                <div className='gptAnswer'
                >
                  <h3>ChatGPT Answer</h3>
                </div>
                <div className='gptAnswer'>
                  An unknown error occured. This wasn't planned. Obviously. Alas. Moving on. It's ok.
                </div>
              </>
            )}
            {page === 'gptAnswer' && gptAnswer === 'loading' && (
              <Command.Loading>

                <div className='gptAnswer'
                >
                  <h3>ChatGPT Answer</h3>
                </div>
                <div className='gptAnswer'>
                  <div className='gpt-loading'>Waiting for ChatGPT response...</div>
                </div>
              </Command.Loading>
            )}
            {page === 'sectionGPTPage' && (
              <Command.Group heading="Sections">
                {Object.keys(sectionDict).map((item) => {
                  return (
                    <Item key={item} value={item + ' summarisesimplifysection'} setPages={setPages} page='gptAnswer' pages={pages} isSection
                      onSelect={summariseSection} sectionDict={sectionDict}
                      inputRef={inputRef}
                    >
                      <Logo>
                        <TextIcon
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </Logo>
                      {item}
                    </Item>
                  )
                })}
              </Command.Group>
            )}
            {page === 'simplifySectionPage' && (
              <Command.Group heading="Sections">
                {Object.keys(sectionDict).map((item) => {
                  return (
                    <Item key={item} value={item + ' summarisesimplifysection'} setPages={setPages} page='gptAnswer' pages={pages} isSection
                      onSelect={simplifySection} sectionDict={sectionDict}
                      inputRef={inputRef}
                    >
                      <Logo>
                        <TextIcon
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </Logo>
                      {item}
                    </Item>
                  )
                })}
              </Command.Group>
            )}
            {page === 'sectionJumpPage' && (
              <Command.Group heading="Sections">
                {Object.keys(sectionDict).map((item) => {
                  return (
                    <Item key={item} value={item + ' jumptosection'} isSection
                      onSelect={jumpToSection} sectionLinkDict={sectionLinkDict}
                      inputRef={inputRef}
                    >
                      <Logo>
                        <TextIcon
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </Logo>
                      {item}
                    </Item>
                  )
                })}
              </Command.Group>
            )}
          </Command.List>

          <div cmdk-raycast-footer="">
            {pages.length > 0 && (
              <>
                <button
                  style={{ opacity: '1', animation: 'fadeInOpacity 1 ease-in 0.1s' }}
                  onClick={() => {
                    setPages((pages) => pages.slice(0, -1))
                  }}
                  cmdk-raycast-subcommand-trigger="">
                  Go Back
                  <kbd style={{ width: '28px' }}>esc</kbd>
                </button>
                <hr />
              </>
            )}


            <button
              onClick={() => {
                var clickEvent = new MouseEvent("click", {
                  "view": window,
                  "bubbles": true,
                  "cancelable": false
                });

                const element = document.querySelector('[aria-selected="true"]');
                element?.dispatchEvent(clickEvent)
              }}
              cmdk-raycast-subcommand-trigger="">
              Execute Command
              <kbd>↵</kbd>
            </button>


            {/* <SubCommand listRef={listRef} selectedValue={value} inputRef={inputRef} /> */}
          </div>
        </Command>
      </div >
    </>
  )
}

function Item({
  children,
  value,
  isCommand = false,
  isSection = false,
  onSelect,
  queryHandlerId,
  setPages,
  page,
  pages,
  sectionDict,
  setShouldSetPage,
  inputRef,
  sectionLinkDict,
}: {
  children: React.ReactNode
  value: string
  isCommand?: boolean
  isSection?: boolean
  onSelect?: any
  queryHandlerId?: string
  setPages?: any
  page?: string
  pages?: any
  sectionDict?: SectionDict
  setShouldSetPage?: any
  inputRef: MutableRefObject<HTMLInputElement | null>
  sectionLinkDict?: SectionDict
}) {
  return (
    <Command.Item value={value}
      onSelect={() => {
        if (!queryHandlerId) {
          inputRef?.current?.focus()
        }

        if (sectionLinkDict) {
          onSelect(sectionLinkDict, value)
        } else if (sectionDict) {
          onSelect(sectionDict, value)
        } else {
          onSelect ?
            onSelect(queryHandlerId ? queryHandlerId : 'qhid not defined')
            : {}
          // console.log('Please define handler for this item.')
        }

        if (!setShouldSetPage) {
          setPages && page ? setPages([...pages, page]) : {}
          // console.log(`Doesn't update page, no valid page provided: ${page}`)
        } else {
          setShouldSetPage(page)
        }

      }}>
      {children}
      <span cmdk-raycast-meta="">{isCommand ? 'Command' : (isSection ? 'Section' : 'ChatGPT')}</span>
    </Command.Item>
  )
}

function getSections() {
  const h2s = document.querySelectorAll('h2')

  const sectionsDict: SectionDict = {}
  // Skip first h2 as it's ToC
  for (let i = 0; i < h2s.length; i++) {
    let [title, content] = retrieveCurrentContent(h2s[i]!)
    title = title!.replace("[edit]", '')
    if (title == 'Navigation menu' || title == 'Contents') {
      continue
    }
    content = content!.replace("\n", ' ')
    if (content == '') {
      continue
    }
    sectionsDict[title] = content
  }
  return sectionsDict
}

function retrieveCurrentContent(sectionHeader: HTMLHeadElement) {
  var title = sectionHeader?.textContent
  var contents = ''
  var current = sectionHeader
  while (current?.nextElementSibling?.tagName != 'h2' && current?.nextElementSibling) {
    // @ts-expect-error
    current = current.nextElementSibling
    // Only scrape paragraphs and lists to facilitate more meaningful response from chatgpt
    if (current.tagName == 'P' || current.tagName == 'UL') {
      contents += current.textContent
    }
  }
  return [title, contents]
}
