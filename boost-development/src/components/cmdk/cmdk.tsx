/*global chrome*/
import React from 'react'
import * as Popover from '@radix-ui/react-popover'
import { Command } from 'cmdk'
import { Logo } from '../../components'
import { ChatBubbleIcon, EyeClosedIcon, FileTextIcon, Half2Icon, MagnifyingGlassIcon, ShuffleIcon } from '@radix-ui/react-icons'
import { wikidarkmodecss } from '../../styles/wiki-darkmode'

window.addEventListener("message", (e) => {
  const payload = e.data
  if (payload.includes("ANSWER=")) {
    const answer = e.data.replace("ANSWER=", "")
    console.log("Received answer:", answer)
  } else if (payload.includes("ERROR=")) {
    const answer = e.data.replace("ERROR=", "")
    console.log("Encountered error:", answer)
  }
})

function askGeneralQuestion(query: string) {
  console.log(query)
  // Post query to window
  window.postMessage("QUERY=" + query)
  // Move to react with useState for answer

  // Display answer in frontend

  // Handle login error
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
    // @ts-expect-error
    content.style.borderRightWidth = '1px'
  } else {
    // @ts-expect-error
    nav.style.visibility = 'unset'
    // @ts-expect-error
    footer.style.visibility = 'unset'
    // @ts-expect-error
    content.style.marginLeft = '10em'
    // @ts-expect-error
    content.style.borderRightWidth = '0'
  }

  // Determine via visibility of a specific element which is always there whether focus mode
  // is activated or not
}

function toggleDarkMode(s: string) {
  const id = 'boostDarkmode'
  const isActive = document.getElementById(id)
  if (isActive) {
    console.log('Deactivate')
    var styleSheet = document.getElementById(id)
    styleSheet?.remove()
  } else {
    console.log('Activate')
    const styleSheet = document.createElement('style')
    styleSheet.innerText = wikidarkmodecss
    styleSheet.id = id
    document.head.appendChild(styleSheet)
  }
}

function QueryField({ inputRef, queryHandlerId, setVisibility }: {
  inputRef: HTMLInputElement | null,
  queryHandlerId: string,
  setVisibility: React.Dispatch<React.SetStateAction<boolean>>,
}) {
  const [query, setQuery] = React.useState('')


  const handleSubmission = function (e: any) {
    if (!e) e = window.event;
    var keyCode = e.code || e.key;
    if (keyCode == 'Enter') {
      if (query) {
        switch (queryHandlerId) {
          case "searchWiki": searchWiki(query)
            break
          case "askGeneralQuestion": askGeneralQuestion(query)
            break
          default: console.log("Invalid queryHandlerId: ", queryHandlerId)
        }
        setVisibility(false)
      }
    } else if (keyCode == 'Escape') {
      setQuery('')
      setVisibility(false)
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
      style={{ paddingRight: '10px' }}
      value={query} onValueChange={setQuery}
      autoFocus
      placeholder='Enter query...' onKeyDown={handleSubmission}
    />
  )
}

export function RaycastCMDK() {
  const theme = 'light'
  const [value, setValue] = React.useState('linear')
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const queryInputRef = React.useRef<HTMLInputElement | null>(null)
  const listRef = React.useRef(null)

  const [showQueryInput, setShowQueryInput] = React.useState(false)

  const resetVisibility = () => {
    setShowQueryInput(false)
    inputRef?.current?.focus()
  }


  React.useEffect(() => {
    inputRef?.current?.focus()
  }, [])

  function activateQueryField(queryHandlerId: string) {
    setShowQueryInput(true)
    queryInputRef?.current?.focus()
    setQueryHandlerId(queryHandlerId)
  }

  const [queryHandlerId, setQueryHandlerId] = React.useState('Please change the query handler id where necesseray')

  return (
    <div id='cmdk' className="raycast">
      <Command className='cmdk-topelement' value={value} onValueChange={(v) => setValue(v)}>
        <div cmdk-raycast-top-shine="" />
        <div className='raycast-inputs'>
          <Command.Input ref={inputRef} style={{ flex: '6 285px' }} autoFocus placeholder="Search commands..." />
          {showQueryInput
            ?
            <Command className='cmd-query'>

              <QueryField
                // @ts-expect-error
                inputRef={queryInputRef}
                queryHandlerId={queryHandlerId}
                setVisibility={resetVisibility} />
            </Command>
            : <></>
          }
        </div>
        <hr cmdk-raycast-loader="" />
        <Command.List ref={listRef}>
          <Command.Empty>No results found.</Command.Empty>
          <Command.Group heading="Navigation">
            <Item isCommand value="Search Wikipedia" onSelect={activateQueryField} queryHandlerId="searchWiki">
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
            <Item isCommand value="Show Today's Featured Article" onSelect={callTAFPage}>
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
            <Item isCommand value="Show Random Article" onSelect={randomWikiPage}>
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
          </Command.Group>
          <Command.Group heading="Appearance">
            <Item isCommand value="Toggle Focus Mode" onSelect={toggleFocusMode}>
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
            <Item isCommand value="Toggle Dark Mode" onSelect={toggleDarkMode}>
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
          </Command.Group>
          <Command.Group heading="AI Helper">
            <Item value="Ask General Question" onSelect={activateQueryField} queryHandlerId="askGeneralQuestion">
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
          </Command.Group>
        </Command.List>

        <div cmdk-raycast-footer="">
          {/* {theme === 'dark' ? <RaycastDarkIcon /> : <RaycastLightIcon />} */}
          <RaycastLightIcon />

          <button cmdk-raycast-open-trigger="">
            Open Application
            <kbd>↵</kbd>
          </button>

          <hr />

          <SubCommand listRef={listRef} selectedValue={value} inputRef={inputRef} />
        </div>
      </Command>
    </div>
  )
}

function Item({
  children,
  value,
  isCommand = false,
  onSelect,
  queryHandlerId,
}: {
  children: React.ReactNode
  value: string
  isCommand?: boolean
  onSelect?: ((s: string) => void)
  queryHandlerId?: string
}) {
  return (
    <Command.Item value={value} onSelect={() => { onSelect ? onSelect(queryHandlerId ? queryHandlerId : 'qhid not defined') : console.log('Please define handler for this item.') }}>
      {children}
      <span cmdk-raycast-meta="">{isCommand ? 'Command' : 'Information Retrieval'}</span>
    </Command.Item>
  )
}

function SubCommand({
  inputRef,
  listRef,
  selectedValue,
}: {
  inputRef: React.RefObject<HTMLInputElement>
  listRef: React.RefObject<HTMLElement>
  selectedValue: string
}) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'k' && e.metaKey) {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }

    document.addEventListener('keydown', listener)

    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [])

  React.useEffect(() => {
    const el = listRef.current

    if (!el) return

    if (open) {
      el.style.overflow = 'hidden'
    } else {
      el.style.overflow = ''
    }
  }, [open, listRef])

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger cmdk-raycast-subcommand-trigger="" onClick={() => setOpen(true)} aria-expanded={open}>
        Actions
        <kbd>⌘</kbd>
        <kbd>K</kbd>
      </Popover.Trigger>
      <Popover.Content
        side="top"
        align="end"
        className="raycast-submenu"
        sideOffset={16}
        alignOffset={0}
        onCloseAutoFocus={(e) => {
          e.preventDefault()
          inputRef?.current?.focus()
        }}
      >
        <Command>
          <Command.List>
            <Command.Group heading={selectedValue}>
              <SubItem shortcut="↵">
                <WindowIcon />
                Open Application
              </SubItem>
              <SubItem shortcut="⌘ ↵">
                <FinderIcon />
                Show in Finder
              </SubItem>
              <SubItem shortcut="⌘ I">
                <FinderIcon />
                Show Info in Finder
              </SubItem>
              <SubItem shortcut="⌘ ⇧ F">
                <StarIcon />
                Add to Favorites
              </SubItem>
            </Command.Group>
          </Command.List>
          <Command.Input placeholder="Search for actions..." />
        </Command>
      </Popover.Content>
    </Popover.Root>
  )
}

function SubItem({ children, shortcut }: { children: React.ReactNode; shortcut: string }) {
  return (
    <Command.Item>
      {children}
      <div cmdk-raycast-submenu-shortcuts="">
        {shortcut.split(' ').map((key) => {
          return <kbd key={key}>{key}</kbd>
        })}
      </div>
    </Command.Item>
  )
}

function RaycastLightIcon() {
  return (
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M934.302 511.971L890.259 556.017L723.156 388.902V300.754L934.302 511.971ZM511.897 89.5373L467.854 133.583L634.957 300.698H723.099L511.897 89.5373ZM417.334 184.275L373.235 228.377L445.776 300.923H533.918L417.334 184.275ZM723.099 490.061V578.209L795.641 650.755L839.74 606.652L723.099 490.061ZM697.868 653.965L723.099 628.732H395.313V300.754L370.081 325.987L322.772 278.675L278.56 322.833L325.869 370.146L300.638 395.379V446.071L228.097 373.525L183.997 417.627L300.638 534.275V634.871L133.59 467.925L89.4912 512.027L511.897 934.461L555.996 890.359L388.892 723.244H489.875L606.516 839.892L650.615 795.79L578.074 723.244H628.762L653.994 698.011L701.303 745.323L745.402 701.221L697.868 653.965Z"
        fill="#FF6363"
      />
    </svg>
  )
}

function WindowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.25 4.75V3.75C14.25 2.64543 13.3546 1.75 12.25 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V4.75M14.25 4.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H3.75C2.64543 14.25 1.75 13.3546 1.75 12.25V4.75M14.25 4.75H1.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FinderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5 4.75V6.25M11 4.75V6.25M8.75 1.75H3.75C2.64543 1.75 1.75 2.64543 1.75 3.75V12.25C1.75 13.3546 2.64543 14.25 3.75 14.25H8.75M8.75 1.75H12.25C13.3546 1.75 14.25 2.64543 14.25 3.75V12.25C14.25 13.3546 13.3546 14.25 12.25 14.25H8.75M8.75 1.75L7.08831 7.1505C6.9202 7.69686 7.32873 8.25 7.90037 8.25C8.36961 8.25 8.75 8.63039 8.75 9.09963V14.25M5 10.3203C5 10.3203 5.95605 11.25 8 11.25C10.0439 11.25 11 10.3203 11 10.3203"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.43376 2.17103C7.60585 1.60966 8.39415 1.60966 8.56624 2.17103L9.61978 5.60769C9.69652 5.85802 9.92611 6.02873 10.186 6.02873H13.6562C14.2231 6.02873 14.4665 6.75397 14.016 7.10088L11.1582 9.3015C10.9608 9.45349 10.8784 9.71341 10.9518 9.95262L12.0311 13.4735C12.2015 14.0292 11.5636 14.4777 11.1051 14.1246L8.35978 12.0106C8.14737 11.847 7.85263 11.847 7.64022 12.0106L4.89491 14.1246C4.43638 14.4777 3.79852 14.0292 3.96889 13.4735L5.04824 9.95262C5.12157 9.71341 5.03915 9.45349 4.84178 9.3015L1.98404 7.10088C1.53355 6.75397 1.77692 6.02873 2.34382 6.02873H5.81398C6.07389 6.02873 6.30348 5.85802 6.38022 5.60769L7.43376 2.17103Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
