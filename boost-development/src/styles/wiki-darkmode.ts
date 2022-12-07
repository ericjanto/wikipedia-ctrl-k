/* <indicator name="script">Stylesheet for [[m:User:DavidL/DarkTheme|Dark Theme]]</indicator> */
// Not css or scss since we want to set this programmatically via js
export const wikidarkmodecss =
`
body {
    background-image:url(-) !important;
  }
  
  ::selection {
    background-color: #39f;
    color: #000;
  }
  
  body .mw-page-container, body #mw-panel {
      background-color: unset !important;
      background-image: unset !important;
  }
  
  body :not([class]) > pre, body :not([class]) > code, body .mw-code {
      background-color: #222 !important;
      color: #ccc;
      border-color: #8888;
  }
  
  body #contentSub, body #contentSub2, * {
      color: unset;
  }
  
  table th, table td {
      border-color: #555;
  }
  
  /* Make dark project logo visible with dark theme. */
  .mw-wiki-logo {
      filter: drop-shadow(0px 0px 50px #fa7);
      background-color: #4322;
  }
  
  body .mw-ext-score {
      filter: invert(0.7);
  }
  
  body .wikiEditor-ui-toolbar {
      background-color: #333;
  }
  
  /* Class to use for characters represented by an image */
  body .darkchar {
    filter: invert(0.8);
  }
  #pt-uls .uls-trigger::before,
  .skin-vector-legacy #pt-uls .uls-trigger::before {
    filter: invert(0.8);
  }
  
  body .tux-navitoggle {
    filter: invert(1);
  }
  
  
  /* -- GENERAL -- */
  
  
  /* Links */
  
  .pBody ul li a, .pBody ul li a:visited, .subpages a, .subpages a:visited, body a, body a:visited, a, a:visited {
      color: #49c !important;
  }
  
  .pBody ul li a.new, .pBody ul li a.new:visited, .subpages a.new, .subpages a.new:visited, body a.new, body a.new:visited, a.new, a.new:visited, .pBody ul li.new a, .pBody ul li.new a:visited, li.new a, li.new a:visited, body .lienbrisé {
      color: #c64 !important;
  }
  
  body a.mw-kartographer-autostyled {
      color: #fff !important;
  }
  
  
  body .ui-widget-content {
    background-image: none !important;
    background-color: #222 !important;
    color: #ccc;
  }
  table.hovertable tr:hover {
    color: #444;
  }
  body .ui-dialog a {
    color: #49c !important;
  }
  
  
  /* Buttons */
  
  body .mw-ui-button {
    background-color: #334;
    color: unset !important;
  }
  body .oo-ui-buttonElement-button {
    color: unset !important;
  }
  body .mw-ui-button:not(:disabled):hover {
    background-color: #049;
  }
  .client-js .mw-recentchanges-toplinks:not(.mw-recentchanges-toplinks-collapsed),
  body .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-tagMultiselectWidget-handle {
    border-color: #555;
  }
  body .mw-rcfilters-ui-filterTagMultiselectWidget-wrapper-content-title {
    color: #cb8;
  }
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active,
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-buttonElement-pressed > .oo-ui-buttonElement-button {
    background-color: #359;
  }
  
  input, select, textarea, pre, .editOptions {
      background-color: #333 !important;
      color: #ccc !important;
      border-color: #555 !important;
  }
  
  input[type="submit"], input[type="button"] {
      background-color: #777 !important;
      color: #000 !important;
  }
  
  body .ui-toggler.ui-state-default {
      color: #49c !important;
  }
  
  .mw-charinsert-buttons a {
      background-color: #444 !important;
      color: #49c !important;
  }
  
  body #p-lang .uls-settings-trigger {
    filter: invert(1);
  }
  
  body .ext-discussiontools-ui-replyWidget-preview {
    background: #334;
  }
  body .ext-discussiontools-ui-replyWidget-preview::before {
    color: #c0c080;
  }
  
  
  body .collection-warning-box {
    background-color: #224;
  }
  body .collection-maintenance-box {
    border-color: #555;
  }
  
  /* {{nospam}} */
  bdi img[alt="@"], bdi img[alt="."] {
    filter: invert(0.8);
  }
  
  /* -- SKIN -- */
  
  
  /* Timeless */
  body #mw-content {
    background-color: #222;
    border-color: #334;
  }
  body #mw-content-container {
    background: #111822;
  }
  body #mw-site-navigation .sidebar-chunk,
  body #mw-related-navigation .sidebar-chunk {
    background: #222;
    border-color: #334;
  }
  body #mw-header-container {
    background: #345;
  }
  body #personal .dropdown {
    border-color: #555;
    background: #333;
    box-shadow: 0 2px 3px 1px rgba(128,128,128,0.5);
  }
  body #personal .dropdown::before,
  body #personal .dropdown::after {
    border-bottom: 10px solid #ca0 !important;
    border-left: 10px solid transparent !important;
    border-right: 10px solid transparent !important;
  }
  
  /* Monobook */
  .skin-monobook #p-cactions {
      top: 2.3em;
  }
  .skin-monobook .mw-body {
      margin-top: 3.8em;
  }
  
  /* Vector * */
  .vector-menu-content {
      color: #ccc;
      border-color: #478;
  }
  
  body .vectorbox {
      background-color: #333;
  }
  body .mw-sidebar-action .mw-sidebar-action-item h3.mw-sidebar-action-heading,
  body .vector-menu-portal .vector-menu-heading {
      color: #c83;
  }
  
  /* Vector legacy */
  body .vector-sticky-header {
      background-color: #222 !important;
      background-image: unset !important;
  }
  
  body.skin-vector.skin-vector-legacy .vector-menu-tabs .selected {
      background-image: none !important;
  }
  body.skin-vector.skin-vector-legacy .vector-menu-tabs,
  body.skin-vector.skin-vector-legacy .vector-menu-tabs a,
  #mw-head .vector-menu-dropdown h3 {
      background-image: linear-gradient(to bottom,rgba(64,119,136,0) 0,#478 100%);
  }
  body.skin-vector.skin-vector-legacy  .vector-menu-tabs .selected {
      background-color: #222;
  }
  body.skin-vector.skin-vector-legacy  .vector-menu-tabs li {
  background-image: linear-gradient(to top,#34a 0,#226 1px,#222 100%);
  }
  body.skin-vector.skin-vector-legacy .vector-menu-tabs .selected {
      background-color: #128 !important;
  }
  body .vector-menu-tabs-legacy .selected {
    background: #235;
  }
  body .vector-menu-tabs-legacy li {
    background-image: linear-gradient(to top,#77c1f6 0,#249 1px,#222 100%);
  }
  /*
  body .vector-menu-tabs,
  body .vector-menu-tabs a,
  body #mw-head .vector-menu-dropdown .vector-menu-heading {
    background-image: linear-gradient(to bottom,rgba(167,215,249,0) 0,#4757c9 100%);
  }
  */
  
  /* User tools */
  body.skin-vector.skin-vector-legacy li#pt-notifications-alert,
  body.skin-vector.skin-vector-legacy li#pt-notifications-notice,
  body.skin-vector.skin-vector-legacy li#pt-watchlist-2 {
    padding: 4px 0 0 0 !important;
  }
  
  
  /* Vector 2022 */
  body.skin-vector:not(.skin-vector-legacy) .vector-menu-tabs li.selected {
    background-image: linear-gradient(to top,#24f 1px,#2220 100%);
  }
  body.skin-vector:not(.skin-vector-legacy) .vector-menu-tabs li {
    padding: 0 0.5em;
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc::after {
    background: linear-gradient(#2220,#333);
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc {
    background-color: #334;
  }
  body.skin-vector:not(.skin-vector-legacy) .sidebar-toc .sidebar-toc-title {
    color: #ccc;
  }
  /* User tools * /
  body.skin-vector:not(.skin-vector-legacy) li#pt-notifications-alert,
  body.skin-vector:not(.skin-vector-legacy) li#pt-notifications-notice,
  body.skin-vector:not(.skin-vector-legacy) li#pt-watchlist-2 {
    background: #047 !important;
    padding: 4px 0 4px 4px !important;
    border: dotted 1px #08c;
    border-radius: 4px !important;
  }*/
  
  body #mw-sidebar-button::before,
  body .mw-ui-icon-wikimedia-search::before,
  body .mw-ui-icon-wikimedia-speechBubbles::before,
  body .mw-ui-icon-wikimedia-history::before,
  body .mw-ui-icon-wikimedia-star::before,
  body .mw-ui-icon-wikimedia-language::before,
  body .mw-ui-icon-wikimedia-userTalk::before,
  body .oo-ui-icon-settings,
  body .mw-ui-icon-settings::before,
  body .mw-ui-icon-wikimedia-labFlask::before,
  body .mw-ui-icon-wikimedia-userContributions::before,
  body .oo-ui-icon-logOut,
  body .mw-ui-icon-logOut::before,
  body .vector-menu-dropdown .vector-menu-heading::after,
  body .mw-interlanguage-selector::after
  {
    filter: invert(0.8);
  }
  
  body .vector-menu-dropdown .vector-menu-content {
    background-color: #432;
    border-color: #555;
  }
  body .vector-user-menu-logout {
    border-color: #c80;
    background-color: #400;
  }
  
  /* Moderne */
  body .portlet h3 {
    background: unset;
  }
  body #mw_portlets {
    background-color: #234;
  }
  
  /* UI */
  body .language-settings-dialog {
    background: #333;
  }
  body .languagesettings-menu h1 {
    color: unset;
  }
  body .languagesettings-menu .menu-section.active {
    background-color: #fc0;
  }
  
  body .uls-input-settings .uls-input-settings-inputmethods-list,
  body #languagesettings-settings-panel {
    color: #ccc;
    background: #223;
  }
  body #languagesettings-settings-panel h4 {
    color: #ccc;
  }
  body .languagesettings-menu .menu-section .settings-text,
  body .uls-ui-languages p,
  body .checkbox {
    color: #379;
  }
  body .languagesettings-menu .menu-section:hover {
    color: #222;
    background-color: #fe0;
  }
  body .languagesettings-menu .menu-section {
    color: #ccc;
  }
  body .uls-language-settings-close-block {
    background: #222;
  }
  body .uls-icon-close {
    filter: invert(1);
  }
  
  /* Vector 2022 */
  body.skin-vector:not(.skin-vector-legacy) .wb-langlinks-link a {
    color: #08c !important;
  }
  
  body table.mw-interwikitable.body td.mw-interwikitable-local-yes {
      background-color: #475;
  }
  
  body [id^="fileinfotpl"] {
      background: #338;
  }
  .fileinfotpl-type-information .description, body #anontalkpagetext {
      background-color: #222 !important;
  }
  
  body .ext-discussiontools-init-targetcomment {
      background-color: unset !important;
  }
  body .ext-discussiontools-init-highlight-fadein {
      opacity: 0 !important;
  }
  
  body .mw-search-results li:nth-child(2n) {
      background: #333;
  }
  
  body .userinfo-contact, body .boite-coloree, body .cadre-colore-contenu, body .templatesUsed, body .hiddencats {
      background: #2e2e2e !important;
  }
  body .boite-coloree *,
  body .mw-ui-button.mw-ui-quiet,
  body .mw-ui-button.mw-ui-quiet.mw-ui-progressive,
  body .mw-ui-button.mw-ui-quiet.mw-ui-destructive,
  body .ligne-de-forme {
      color: unset !important;
  }
  
  body .entete-boite
  { background-color: #457 !important; }
  body .entete-boite-icone
  { filter: invert(0.8); }
  body .entete-boite-titre
  { color:#ccc !important; }
  
  body .credit-photos {
      border-color: #9998 !important;
      background-color: #4448 !important;
  }
  
  body table.table-jaune, body table.table-jaune td, body table.vectorbox td {
      background-color: unset !important;
  }
  
  body .mw-json-value, body .mw-json-single-value {
      background-color: #454 !important;
  }
  body .mw-json th {
      background-color: #445 !important;
  }
  body .mw-json tr {
      background-color: #445 !important;
  }
  
  body .table-na {
      background-color: #237 !important;
      color: #ccc !important;
  }
  
  body table.table-jaune th {
      background: #642 !important;
  }
  
  body .mw-parser-output .category-redirect-content {
      background-color: #347;
  }
  
  body .navbox-abovebelow, body .navbox-group, body .navbox-subgroup .navbox-title {
      background: #245 !important;
  }
  
  body .faculte {
      background: linear-gradient(#000000c0, #000000c0) !important;
  }
  body .faculte .image img {
      background: radial-gradient(#789, #777,#222,#000);
  }
  body .alerte {
      background-image: linear-gradient(#000000c0, #000000c0);
  }
  
  body .mw-parser-output .settingsummary {
      background-color: #333;
  }
  body .mw-parser-output .settingsummary-header {
      background-color: #223;
  }
  body .mw-message-box {
      color: #ccc;
      background-color: #334;
      border-color: #578;
  }
  body .mw-message-box-warning {
      background-color: #543;
      border-color: #fc3;
  }
  body .mw-parser-output .note-warn {
    background-color: #443c20;
  }
  
  body.ns-0 #mw-content-text div:not(.toctitle) > h2, body.ns-118 #mw-content-text div:not(.toctitle) > h2 {
      /* background-color: #334; */
      background-color: unset !important;
  }
  
  body table.flextable td {
      background-color: #222;
  }
  
  body table.flextable th {
      background-color: #335;
  }
  
  body #specialcharsets {
      background-color: #322;
  }
  
  body .flaggedrevs_reviewform {
      background-color: #333;
  }
  body div.flaggedrevs_basic {
      background-color: #333;
  }
  body div.flaggedrevs_basic,
  body div.flaggedrevs_notice {
      border-color: #555;
  }
  body table.flaggedrevs_editnotice,
  body table.flaggedrevs_viewnotice {
      border-color: #955;
      background-color: #334;
  }
  
  body .wb-langlinks-link > a:hover {
      color: #08c !important;
  }
  body div.flaggedrevs_diffnotice {
      background-color: #223;
  }
  body .mw-revslider-container,
  body div.flaggedrevs_diffnotice,
  body div.flaggedrevs_preview {
      border-color: #555;
  }
  
  /* Talk overlay mobile view */
  body .overlay-header-container, .overlay-footer-container,
  body .overlay,
  body .overlay-footer-container {
    background-color: #223;
  }
  body .list-header {
    background-color: #224;
    color: #cca;
  }
  .overlay-enabled, .mw-body {
    background-color: #223 !important;
  }
  
  body, body .row .sourcemessage, body .row .suggestiontext, body.ns-talk dl, #catlinks, #mw-head, #content, .pBody, #footer, .wikitable, body #filetoc, #p-cactions li, .editCheckboxes, .editButtons, .mw-rcfilters-ui-changesListWrapperWidget .mw-changeslist-legend, .mw-rcfilters-ui-filterMenuHeaderWidget-header, body #sisterwikis, body .messagebox, body .errorbox, body .warningbox, body .successbox, body #userboxes, body .fieldsetlike .legendtextlike, body .bandeau-container table, body .mp-bordered, body li.tooltipRef {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #478 !important;
  }
  body .userboxes {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #457 !important;
  }
  body .wikipediauserbox td {
      color: #ccc !important;
  }
  
  
  body .quiz .correction {
      background-color: #159;
  }
  
  .ns-1 dl, .ns-3 dl, .ns-5 dl, .ns-7 dl, .ns-9 dl, .ns-11 dl, .ns-13 dl, .ns-15 dl, .colorationindentative dl {
      border-color: #8888 !important;
  }
  
  body .texte_normal {
      color: #ccc !important;
  }
  
  body .mw-parser-output .wmstrategy, body .mw-parser-output .wlx-outer, body .mw-parser-output .strategy-2018-20-global-conservations-banner li {
      background-color: unset;
  }
  
  body div.mw-parser-output table.charts-zebragrey > tbody > tr:nth-of-type(2n+1) {
      background-color: #8080c040;
  }
  
  body div.mw-parser-output table.charts-zebragrey > tbody > tr:nth-of-type(2n) {
      background-color: #77777740;
  }
  
  body table.infobox th.infobox-above {
      background-color: #337 !important;
  }
  
  body table.infobox th.infobox-header {
      background-color: #335 !important;
  }
  
  body table.tracklist th {
      background-color: #232 !important;
  }
  
  body table.tracklist tr, body table.tracklist tr td {
      background-color: #333 !important;
  }
  
  body #mw-mf-page-center, body .last-modified-bar {
      background-color: unset !important;
  }
  
  
  body .free {
      background: #225 !important;
      color: inherit !important;
  }
  
  body .cnotice-message p {
      background: inherit !important;
      color: inherit !important;
  }
  
  body .vertical-navbox {
      background-color: #223 !important;
  }
  
  body .mw-parser-output .wmstrategy-tab.selected, body .mw-parser-output .wmstrategy-content {
      background-color: #000;
  }
  
  body .navbox-abovebelow, body th.navbox-group, body .navbox-subgroup .navbox-title {
      background: #003 !important;
  }
  
  body .mw-translate-fuzzy {
      background-color: #822;
  }
  
  body .opaque {
      background-color: #222 !important;
  }
  
  body table.charttable {
      background-color: #223 !important;
  }
  
  body #sommaire_bas {
      background-color: #444 !important;
  }
  
  body table.mw-abuselog-details th {
      background: #233 !important;
  }
  body table.mw-abuselog-details {
      background-color: unset !important;
  }
  
  body .flaggedrevs-unreviewed {
      background-color: #703000 !important;
  }
  body .flaggedrevs-color-1 {
      background-color: #014 !important;
  }
  body .flaggedrevs-color-2 {
      background-color: #035 !important;
  }
  body .flaggedrevs-color-3 {
      background-color: #432 !important;
  }
  body .flaggedrevs-pending {
      background-color: #653 !important;
  }
  
  body .documentation {
      background: #234 !important;
  }
  table.clade, table.clade td, table.clade tr {
      border-color: #999 !important;
  }
  table.clade td img {
      filter: invert();
  }
  
  body ol.references > li:target, body ul.references > li:target {
      background-color: #77bbff40 !important;
  }
  
  var {
      color: #8ac;
  }
  
  /* ---------------------------------------------------------------------- */
  
  body .oo-ui-messageWidget.oo-ui-messageWidget-block.oo-ui-flaggedElement-warning {
      background-color: #430 !important;
  }
  body .mw-advancedSearch-fieldContainer {
      background: linear-gradient(rgba(0,0,0,0.1),#124 0.5em) !important;
  }
  body .mw-advancedSearch-namespace-selection {
      background: linear-gradient(rgba(0,0,0,0.1),#333 0.5em);
  }
  body .oo-ui-tagMultiselectWidget.oo-ui-widget-enabled {
      background-color: #333 !important;
  }
  body .mw-advancedSearch-fieldContainer .oo-ui-labelElement > .oo-ui-fieldsetLayout-header > .oo-ui-labelElement-label {
      background: #124 !important;
      color: #78a !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle {
      background-color: #345 !important;
      color: #ccc !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle:hover {
      background-color: #36a !important;
      color: #edc !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle {
      background-color: #567 !important;
  }
  body .oo-ui-dropdownWidget.oo-ui-widget-disabled .oo-ui-dropdownWidget-handle {
    color: #777;
    text-shadow: 0 1px 1px #555;
    border-color: #555;
    background-color: #222;
  }
  body .oo-ui-menuOptionWidget.oo-ui-widget-enabled.oo-ui-optionWidget {
      color: #cde !important;
  }
  body .oo-ui-menuOptionWidget.oo-ui-optionWidget-selected {
      background-color: #47c !important;
  }
  body .oo-ui-menuSelectWidget {
      background-color: #555 !important;
      color: #ccc;
  }
  body .oo-ui-popupWidget-popup {
      background-color: #444;
  }
  body oo-ui-toolbar-bar {
      background-color: #555 !important;
  }
  
  /* ---------------------------------------------------------------------- */
  
  body .ext-quick-survey-panel, .ext-qs-loader-bar {
      background-color: #282e38;
  }
  body .wvui-button--framed:not([disabled]) {
      background-color: #999;
      border-color: #555;
  }
  
  /*
  
  body table.wikitable,
  body table.prettytable {
      background-color: #282828 !important;
      border-color: #555 !important;
  }
  body table.wikitable > * > tr > th,
  body table.wikitable > * > tr > td,
  body table.prettytable > * > tr > th,
  body table.prettytable > * > tr > td {
      background-color: #282828 !important;
      border-color: #555 !important;
  }
  */
  
  /* ---------------------------------------------------------------------- */
  
  body .mw-parser-output .special-page-info {
    background-color: #555;
    border-color: #024;
  }
  
  body sup.reference:target {
      background-color: #abcfff40 !important;
  }
  
  body .need_ref {
      background-color: #222 !important;
      color: #c94 !important;
      border-color: #478 !important;
  }
  
  .mw-parser-output .note-info, body .warning-message {
      background-color: unset !important;
  }
  
  body .nounderlines {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #222 !important;
  }
  
  body div.ref {
      background-color: #333 !important;
  }
  
  body .mw-body .flow-topic-title {
      color: #ca7 !important;
  }
  body .flow-topic-titlebar {
      background-color: #000 !important;
  }
  body .flow-component.flow-board-page.flow-full-height-side-rail .flow-board-header::before {
      background-color: #ca74 ! important;
  }
  
  body .flow-post, body .flow-post .flow-author {
      color: unset !important;
  }
  
  body #p-Navigation .pBody {
      background-blend-mode: multiply;
  }
  
  body .mw-parser-output .note-reminder {
      background-color: #ffcf5720 !important;
  }
  
  body .mw-parser-output .community-wishlist-header {
      background-color: #322 !important;
  }
  
  body .boilerplate, body .boilerplate .title {
      background-color: #333 !important;
  }
  
  .collapsible .title, .collapsible tr:first-child th, .collapsible tr:first-child td {
      color: #aaa !important;
  }
  
  body .layouttemplate, body .iw-resultset, body .bandeautexte {
      background-color: #333 !important;
  }
  
  body td.navbox-list {
      background-color: #223 !important;
  }
  
  body .mw-diff-movedpara-left::after, body .mw-diff-movedpara-right::after {
      color: #0ff;
  }
  
  body .bouton {
      color: #000 !important;
  }
  
  body #nouvel_article {
      color: #ccc !important;
  }
  
  body .mw-datatable th {
      background-color: #0000ff20 !important;
  }
  body .mw-datatable td, body .flow-post {
      background-color: unset !important;
  }
  
  body .restrictiontemplate,
  body .ModeleBoiteUtilisateur,
  body .wikibase-entitytermsview .wikibase-toolbar-container,
  body .wikibase-entitytermsview .wikibase-toolbar-container {
      background-color: #333 !important;
  }
  
  body .wikibase-entitytermsforlanguagelistview .wikibase-entitytermsforlanguagelistview-header .wikibase-entitytermsforlanguagelistview-header-row .wikibase-entitytermsforlanguagelistview-cell {
      background-color: #334 !important;
      border-color:#478 !important;
  }
  
  body .wikibase-entitytermsforlanguagelistview {
      background-color: #222 !important;
  }
  
  body .wikibase-statementlistview > .wikibase-toolbar-wrapper,
  body .wikibase-statementgrouplistview .wikibase-statementgroupview-property,
  body .wikibase-sitelinkgroupview .wikibase-sitelinkgroupview-heading-container {
      background-color: #333 !important;
  }
  
  body .wikibase-statementgrouplistview .wikibase-statementgroupview-property,
  body .wikibase-sitelinklistview .wikibase-sitelinkview .wikibase-sitelinkview-siteid-container {
      background: unset !important;
      border: 1px solid #245 !important;
  }
  
  body .mw-babel-box table {
      color: #000 !important;
  }
  
  body .bandeau-niveau-neutre {
      border-color: #777 !important;
      background: #333 !important;
  }
  body .bandeau-niveau-grave {
      background: #422 !important;
  }
  
  body ul {
      list-style-image: url(//upload.wikimedia.org/wikipedia/commons/3/31/Bullet-icon-ccc.svg);
  }
  
  body .cbnnr, body .cbnnr-main, body .cbnnr-icon {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #555 !important;
  }
  .cbnnr-headline, .cbnnr-text {
      display: inline;
      color: #ccc;
  }
  
  body .tux-breadcrumb {
      color: #cb9;
  }
  body .tux-breadcrumb__item--aggregate {
      color: #28c;
  }
  body .tux-groupselector {
      background-color: #111;
      border-color: #555;
  }
  body .tux-grouplist {
      background-color: #222;
  }
  body .tux-grouplist__item:hover {
      background-color: #06c;
  }
  body .tux-statsbar-info {
      color: #aaa;
  }
  body .tux-workflow-status {
      background: #ccc;
  }
  body .tux-editor-header {
      color: #ccc;
  }
  
  body div.wikibase-statementgrouplistview .wikibase-statementlistview,
  body div.wikibase-statementgrouplistview div.wikibase-statementlistview,
  body .wikibase-statementgrouplistview div.wikibase-statementlistview,
  body .wikibase-statementgrouplistview .wikibase-statementlistview {
      background-color: #222 !important;
      color: unset !important;
  }
  
  body .mw-footer li {
      color: unset !important;
  }
  
  body .image-texte {
      filter: invert(1) brightness(75%) !important;
  }
  
  body .oo-ui-buttonElement-frameless > .oo-ui-buttonElement-button > .oo-ui-labelElement-label, body .oo-ui-buttonElement-frameless.oo-ui-labelElement > .oo-ui-buttonElement-button > .oo-ui-labelElement-label,
  body .cbnnr-headline,
  body .cbnnr-cta {
      color: #ccc !important;
  }
  body .tool.oo-ui-buttonElement-frameless.oo-ui-iconElement > .oo-ui-buttonElement-button > .oo-ui-iconElement-icon {
      filter: invert();
  }
  body .wikiEditor-ui-toolbar {
      background-image: none;
  }
  
  body .ace-tm {
      background-color: #222;
      color: #ccc;
      filter: brightness(150%);
  }
  body .ace-tm .ace_gutter {
      background-color: #2a2a2a;
      color: #ccc;
  }
  body .ace-tm .ace_gutter-active-line {
      background-color: #247 !important;
  }
  body .ace-tm .ace_marker-layer .ace_selected-word,
  body .ace-tm .ace_marker-layer .ace_selection
      background-color: #a19964;
  }
  /* Stupidly, Mediawiki does not accept .class1.class2 as CSS selector ! */
  body .ace-tm .ace_constant.ace_numeric {
      color: #0064ff;
  }
  body .ace-tm .ace_constant {
      color: #0064ff !important;
  }
  body .ace-tm .ace_numeric {
      color: #0064ff !important;
  }
  body .ace-tm .ace_storage,
  body .ace-tm .ace_keyword {
      color: #005fff;
  }
  
  body .test-tm .test_dark {
      color: #005fff;
  }
  
  body table.tmbox {
      background-color: #023 !important;
  }
  
  body .columns div:not([class]), body .navbox, body .navbox-subgroup, body .infobox_v3 p.bloc, body .infobox_v3 caption:not([class]), body .aa-fond-gris {
      background-color: #333 !important;
  }
  
  body  .aa-fond-blanc {
      background-color: #444 !important;
  }
  
  body .mw-search-results li:nth-child(2n+1) {
      background-color: #7b7c7e50 !important;
  }
  
  div.mw-babel-box table {
      backdrop-filter: brightness(50%);
  }
  
  body table.ambox-system, body table.ambox, body table.bmbox-system, body table.bmbox,
  body table.cmbox-system, body table.cmbox, body table.dmbox-system, body table.dmbox,
  body table.embox-system, body table.embox, body table.fmbox-system, body table.fmbox, 
  body table.gmbox-system, body table.gmbox, body table.hmbox-system, body table.hmbox, 
  body table.imbox-system, body table.imbox, body table.jmbox-system, body table.jmbox, 
  body table.kmbox-system, body table.kmbox, body table.lmbox-system, body table.lmbox, 
  body table.mmbox-system, body table.mmbox, body table.nmbox-system, body table.nmbox, 
  body table.ombox-system, body table.ombox, body table.pmbox-system, body table.pmbox, 
  body table.qmbox-system, body table.qmbox, body table.rmbox-system, body table.rmbox, 
  body table.smbox-system, body table.smbox, body table.tmbox-system, body table.tmbox, 
  body table.umbox-system, body table.umbox, body table.vmbox-system, body table.vmbox, 
  body table.wmbox-system, body table.wmbox, body table.xmbox-system, body table.xmbox, 
  body table.ymbox-system, body table.ymbox, body table.zmbox-system, body table.zmbox {
      background-color: #333 !important;
      color: #ccc !important;
  }
  
  body .table-no {
      background-color: #f994 !important;
  }
  body .table-yes {
      background-color: #9f94 !important;
  }
  body .table-partial {
      background-color: #ffd4 !important;
  }
  body .table-unknown {
      background-color: #eee4 !important;
  }
  
  body figure figcaption,
  body .thumbcaption {
      color: #ccc;
  }
  
  body figure[typeof~="mw:Image/Thumb"] > figcaption,
  body figure[typeof~="mw:Video/Thumb"] > figcaption,
  body figure[typeof~="mw:Audio/Thumb"] > figcaption,
  body figure[typeof~="mw:Image/Frame"] > figcaption,
  body figure[typeof~="mw:Video/Frame"] > figcaption,
  body figure[typeof~="mw:Audio/Frame"] > figcaption,
  body figure[typeof~="mw:Image/Thumb"],
  body figure[typeof~="mw:Video/Thumb"],
  body figure[typeof~="mw:Audio/Thumb"],
  body figure[typeof~="mw:Image/Frame"],
  body figure[typeof~="mw:Video/Frame"],
  body figure[typeof~="mw:Audio/Frame"]
  {
      background-color: #333;
      border-color: #8888;
  }
  body figure[typeof~="mw:Image/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > audio,
  body figure[typeof~="mw:Image/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Video/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > audio,
  body figure[typeof~="mw:Image/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > img,
  body figure[typeof~="mw:Image/Frame"] > :first-child > img,
  body figure[typeof~="mw:Video/Frame"] > :first-child > img,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > img,
  body figure[typeof~="mw:Image/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Video/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Audio/Thumb"] > :first-child > video,
  body figure[typeof~="mw:Image/Frame"] > :first-child > video,
  body figure[typeof~="mw:Video/Frame"] > :first-child > video,
  body figure[typeof~="mw:Audio/Frame"] > :first-child > video
  {
      border-color: #555;
  }
  
  body figure[typeof~="mw:File/Thumb"] > figcaption,
  body figure[typeof~="mw:File/Frame"] > figcaption,
  body figure[typeof~="mw:Image/Thumb"] > figcaption,
  body figure[typeof~="mw:Video/Thumb"] > figcaption,
  body figure[typeof~="mw:Audio/Thumb"] > figcaption,
  body figure[typeof~="mw:Image/Frame"] > figcaption,
  body figure[typeof~="mw:Video/Frame"] > figcaption,
  body figure[typeof~="mw:Audio/Frame"] > figcaption
  {
      background-color: inherit;
      border-color: #555;
  }
  body figure[typeof~="mw:File/Thumb"],
  body figure[typeof~="mw:File/Frame"],
  body figure[typeof~="mw:Image/Thumb"],
  body figure[typeof~="mw:Video/Thumb"],
  body figure[typeof~="mw:Audio/Thumb"],
  body figure[typeof~="mw:Image/Frame"],
  body figure[typeof~="mw:Video/Frame"],
  body figure[typeof~="mw:Audio/Frame"]
  {
      background-color: #333;
      border-color: #555;
  }
  
  
  body.ns-talk dl, body .ns-talk dl dl dl, body.ns-talk dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl dl, body.ns-talk dl dl dl dl dl dl dl dl dl dl dl dl dl,
  body.ns-0 ol li, body.ns-0 ol li li, body.ns-118 ol li, body.ns-118 ol li li,
  body.ns-0 ol li ul, body.ns-0 ol li li ul, body.ns-0 ol li ul ul, body.ns-118 ol li ul, body.ns-118 ol li li ul, body.ns-118 ol li ul ul
  {
      background-color: unset !important;
  }
  
  body td.navbox-banner {
      background: #223 !important;
  }
  
  html body .homonymie {
      background-color: #224 !important;
  }
  
  kbd {
      background-color: #333 !important;
      border-color: #357 !important;
      font-size: 9pt !important;
      line-height: 1.8em !important;
  }
  
  body .bandeau-simple.bandeau-niveau-information, body .bandeau-discussion.bandeau-niveau-information, body .bandeau-niveau-ebauche, body .bandeau-niveau-information, body table.navbox, body th.navbox-group, body td.navbox-even, body .mw-alerte {
      background-color: unset !important;
  }
  
  body .bandeau-niveau-detail, body .bandeau-section.bandeau-niveau-information {
      border-color: #55c !important;
      background-color: #224 !important;
  }
  
  body .ancetres {
      background-color: #fffc !important;
      padding: 4px;
      color: #000 !important;
  }
  
  body .alternance tr, body .alternance th[scope="row"] {
      background-color: #bababa0b !important;
  }
  
  body .alternance:not(.sortable) tr:nth-child(2n+1), body .alternance.sortable tr:nth-child(2n), body .alternance:not(.sortable) tr:nth-child(2n+1) th[scope="row"], body .alternance.sortable tr:nth-child(2n) th[scope="row"] {
      background-color: #3a3a3a16 !important;
  }
  
  body th.navbox-title {
      background: #225 !important;
  }
  
  body #bandeau-portail {
      border-color: #478 !important;
      background-color: #333 !important;
  }
  
  body .bandeau-niveau-modere {
      border-color: #ee8822 !important;
      background-color: #ff1d0c0e !important;
  }
  
  #p-Contribuer .pBody, body .infobox_v1, body div.infobox_v1, body .infobox_v2, body div.infobox_v2, body .infobox_v3, body div.infobox_v3, body .cadre, body table.ModeleBU {
      background: unset !important;
      color: unset !important;
  }
  
  body .infobox_v1 .entete, body div.infobox_v1 .entete, body .infobox_v2 .entete, body div.infobox_v2 .entete, body .infobox_v3 .entete, body div.infobox_v3 .entete {
      background-color: #46c !important;
  }
  
  body td.diff-deletedline .diffchange {
      background: #124 !important;
      color: #c00000 !important;
  }
  
  body td.diff-addedline .diffchange {
      background: #421 !important;
      color: #c72 !important;
  }
  
  .portlet h3 {
      background-color: unset !important;
      border: unset !important;
  }
  
  div.cnotice, body .converture-titre, body .converture-sommaire, body .converture-sommaire div, body #mp-content td {
      background-color: unset !important;
  }
  
  /*
  code {
      color: unset !important;
      background-color: unset !important;
      border: unset !important;
  }
  */
  code {
      color: unset;
      background-color: unset;
      border: unset;
  }
  
  .infobox  {
      background-color: #333 !important;
      color: #ccc !important;
      border-color: #478 !important;
  }
  
  table.altlines1 tr:nth-child(2n+1), table.altlines2 tr:nth-child(2n) {
      background: #334 !important;
  }
  
  .mw-pt-languages {
      background-color: #333 !important;
      border: 1px solid #444 !important;
  }
  .mw-pt-languages-label {
      background-color: #444 !important;
  }
  
  .mw-babel-wrapper {
      background-color: #333 !important;
      border-color: #478 !important;
  }
  
  
  body .mwe-popups .mwe-popups-container {
      background: #333;
  }
  body .mwe-popups .mwe-popups-extract[dir="ltr"]::after {
      background-image: linear-gradient(to right,rgba(255,255,255,0),#333 50%);
  }
  body .mwe-popups .mwe-popups-extract p {
      color: #fff;
  }
  
  
  .arrowSteps li, #mwe-upwiz-steps li.head {
      background-color: #444 !important;
  }
  
  .arrowSteps li.arrow::after {
      border-left-color: #444 !important;
  }
  
  .arrowSteps li.arrow::before {
      border-left-color: #08a !important;
  }
  
  table.wikitable th, body table.wikitable > tr > th, body table.wikitable > * > tr > th {
      background-color: #444 !important;
  }
  table.wikitable > tr > th, table.wikitable > tr > td, table.wikitable > * > tr > th, table.wikitable > * > tr > td {
      border-color: #555 !important;
  }
  
  @media only screen {
  table.wikitable th, body table.wikitable > tr > th, body table.wikitable > * > tr > th {
      background-color: #444 !important;
  }
  table.wikitable > tr > th, table.wikitable > tr > td, table.wikitable > * > tr > th, table.wikitable > * > tr > td {
      border-color: #555 !important;
  }
  }
  
  .oo-ui-messageWidget.oo-ui-messageWidget-block.oo-ui-flaggedElement-notice{
      background-color: #444 !important;
      border-color: #555 !important;
  }
  /*
  .oo-ui-menuSelectWidget {
      background-color: #aaa !important;
  }
  */
  
  .diff-addedline, .diff-deletedline, .diff-context {
      background-color: #222 !important;
      color: #ccc !important;
      border-color: #444 !important;
  }
  
  #pagehistory li.selected {
      background-color: #000 !important;
      color: #ccc !important;
  }
  
  /* .gallerybox .thumb img,  */
  #file img, .filehistory a img, .com-checker img {
      background: url(//upload.wikimedia.org/wikipedia/commons/6/60/Checker-16x16-dark.png) repeat;
  }
  
  body ul.mw-gallery-packed-hover li.gallerybox:hover div.gallerytextwrapper,
  body ul.mw-gallery-packed-overlay li.gallerybox div.gallerytextwrapper,
  body ul.mw-gallery-packed-hover li.gallerybox.mw-gallery-focused div.gallerytextwrapper {
      background: rgba(48,48,48,0.8);
  }
  
  body .gallery {
      border-color: #555 !important;
  }
  body .gallery-image {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-tagMultiselectWidget-handle {
      background-color: #000 !important;
  }
  body .oo-ui-tabOptionWidget {
      color: #ccc !important;
  }
  .mw-rcfilters-ui-filterTagMultiselectWidget-views-select-widget.oo-ui-widget {
      border-color: #478 !important;
  }
  .mw-rcfilters-ui-filterTagMultiselectWidget.oo-ui-widget-enabled .oo-ui-buttonElement {
  /*	background-color: #555 !important;*/
  }
  body .mw-rcfilters-ui-itemMenuOptionWidget-label-desc,
  body .mw-rcfilters-ui-tagItemWidget-popup-content {
      color: #ccc;
  }
  
  body .mw-tag-markers {
    background-color: #c704;
  }
  
  div .licensetpl_wrapper, div .licensetpl, div .fileinfo-paramfield {
      background-color: #222 !important;
      border-color: #478 !important;
  }
  
  #mw-page-base {
      background: unset;
  }
  
  /*ul, ol, table {
      background-color: #222;
      color: #ccc;
      border-color: #478;
  }*/
  
  ul.vector-menu-content-list {
      background-color: unset;
  }
  
  body .toc, body #toc, .mw-warning, body .toccolours:not(.mw-collapsible-toggle) {
      background: #002 !important;
  }
  
  .tocnumber {
      color: #ca0;
  }
  
  [aria-labelledby="project-lists-label"] {
      background-color: #432 !important;
  }
  
  body .mw-parser-output .ts-doc-doc, body .mw-parser-output .ts-doc-footer {
      background-color: #222;
      border-color: #8888;
  }
  body .mw-parser-output .ts-doc-header {
      background-color: #334;
  }
  body .mw-parser-output .skin-infobox-header {
      color: #888;
      background: #234;
  }
  body .mw-inputbox-centered {
      background-color: unset !important;
  }
  body .mw-parser-output .extension-translate-navcolumn {
      background-color: #223;
      border-color: #8888;
  }
  
  body #p-lang .mw-interlanguage-selector.selector-open {
    background-color: #334;
  }
  body #p-lang .mw-interlanguage-selector,
  body #p-lang .mw-interlanguage-selector:active {
    background-blend-mode: screen;
  }
  
  
  /* meta */
  body .uls-menu,
  body .uls-lcd {
      color: #ccc;
      background-color: #222;
      border-color: #555;
  }
  body .uls-search {
      background-color: unset;
      border-color: #555;
  }
  body #uls-settings-block {
      color: #ccc;
      background-color: #2a2a2a;
      border-color: #555;
  }
  body #uls-settings-block > button {
      color: #ccc;
  }
  body .uls-lcd-region-title {
      color: #aaa;
  }
  body div.uls-menu {
      margin-top: unset;
  }
  
  body .mw-parser-output .new-collapse.new-collapse > .mw-collapsible-toggle {
    color: #27e;
  }
  body .mw-parser-output .collapse-mobile > .mw-collapsible-content > div {
    color: inherit;
  }
  
  body .mw-parser-output .MainPage__block_heading {
      background-color: #234;
      border-color: #711;
  }
  body .mw-parser-output .MainPage__block:first-child .MainPage__block_heading {
      border-color: #711;
  }
  body .mw-parser-output .frinfo-header,
  body .mw-parser-output .frinfo h2 {
    color: #ccc;
    border-color: #248;
  }
  
  /* commons */
  body .mw-parser-output .delh {
      background-color: #322;
      border-color: #544;
  }
  body .mw-parser-output .template-picture-of-the-day {
      border-color: #332;
      background-color: #221;
  }
  body .mw-parser-output .license-review-passed {
      background-color: #333;
      border-color: #555;
  }
  body .description {
      border-color: #248 !important;
      background-color: #22242a !important;
  }
  body .mw-parser-output .com-en-rationale-display,
  body .mw-parser-output .com-fr-rationale-display {
      background-color: rgba(230,255,255,0.1);
  }
  body .mw-parser-output .on-wikipedia {
    background-color: #223;
    color: #ca7;
    border-color: #555;
  }
  body .mime-type.has-warning {
    color: #fc4;
  }
  
  /* wikibooks (it) */
  body .mw-parser-output .c-azzurro,
  body .mw-parser-output .h-azzurro {
      border-color: #345;
      background-color: #242d3c;
  }
  body .mw-parser-output .bar-general {
      background-color: #332822;
  }
  body .mw-parser-output .home-vetrina1,
  body .mw-parser-output .home-vetrina2,
  body .mw-parser-output .home-vetrina3 {
      border-color #555;
      background-color: #111;
  }
  body .mw-parser-output .vetrina-main {
      color: #bbb;
  }
  body .mw-parser-output .finestra6-titolo {
      background-color: #282420;
  }
  
  /* wikibooks (en) */
  body .PrettyTextBox {
      background-color: #333;
      color: #ccc;
      border-color: #555;
  }
  body .user-block,
  body .collapsible {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  /* wikibooks(pt) */
  body .top,
  body .top .cont {
      border-color: #444 !important;
      background-color: #111 !important;
  }
  body .top .cont .guia {
      border-top: 1px solid #444 !important;
      background-color: #122 !important;
  }
  body .extra-info {
      border-color: #444 !important;
      background-color: #333 !important;
  }
  body .extra-info div {
      border-color: #444 !important;
      background-color: #222 !important;
  }
  body .extra-info div > table td {
      border-color: #555 !important;
  }
  body .azul-limpo {
      background-color: #234;
      border-color: #123;
  }
  body .flow-ui-editorWidget > .flow-ui-editorWidget-editor:not(.oo-ui-pendingElement-pending)
  {
    background-color: #123;
  }
  
  body .bb .coluna div,
  body .bb-finalizados {
      background-color: #223;
      border-color: #445;
  }
  body .bb h2, .bb-finalizados h2 {
      background-color: #282233;
      border-color: #333;
  }
  
  
  /* wikibooks (fr) */
  .nav-chap-button {
      filter: invert(1) contrast(0.75);
  }
  body .mw-specialCiteThisPage-bibliographic {
    background-color: #abb3c340;
  }
  body.page-Discussion_Wikilivres_Le_Bistro_2022 ul > li > img {
    filter: invert(1) brightness(0.75);
  }
  body .icone_de_titre.niveau img {
      filter: invert(0.7) hue-rotate(180deg);
  }
  
  /* wikiversity (fr) */
  .leçons td {
    background-color: #321;
  }
  
  /* wikisource (fr) */
  body .portail-titre,
  body .accueil-titre {
      filter: invert(0.4) brightness(150%);
  }
  body .vcard {
      background-color: #432 !important;
      box-shadow: 0.2em 0.3em 0.2em #555 !important;
  }
  body .colore {
      filter: invert(0.4) brightness(150%);
  }
  body .headertemplate {
      background-color: #432;
  }
  body .footertemplate {
      background-color: #333;
  }
  
  /* wiktionary (fr) */
  body div.noarticletext {
      color: #ccc;
      border-color: #555;
      background-color: #222;
  }
  body .noarticletext > div > div > div {
      background-color: #222 !important;
  }
  body .noarticletext > div > div:nth-child(1) > div > div:first-child {
      background-color: #155 !important;
  }
  body .noarticletext > div > div:nth-child(2) > div > div:first-child {
      background-color: #751 !important;
  }
  body .noarticletext > div > div > div > div > span[style*="color: #000000;"] {
      color: #ccc !important;
  }
  
  body .mw-parser-output .main-top {
      background-color: unset;
      background-image: url("https://upload.wikimedia.org/wikipedia/commons/5/50/Wikipedia_logo_letters_banner_dark.svg");
      border-color: #555;
  }
  body .mw-parser-output .main-top-left {
      background-image: none;
      border-color: #555;
  }
  body .mw-parser-output .main-box {
      background: #222;
      border-color: #555;
  }
  
  /* wikiversity (fr) */
  body .emphase {
      background-color: #114 !important;
  }
  
  /* wikiquote (fr) */
  body .projets-wm {
    color: #ccc !important;
    border-color: #555 !important;
  }
  
  /* wikiquote (en) */
  body .MainPageLetterHead,
  #EnWpMpBook2 {
      background-color: #222 !important;
      border-color: #555 !important;
  }
  #mf-qotd div {
    border-color: #555 !important;
  }
  
  /* wikinews (fr) */
  
  body table td#mp-tfa, body table td#mp-tfa {
      color: #ccc !important;
  }
  body tr.blanco-hover {
      background: #223;
  }
  body tr.gris-hover {
      background: #112;
  }
  body .entete-accueil {
      background: transparent !important;
  }
  body .cadre-contenu {
      color: #ccc !important;
      background-color: #111 !important;
  }
  /* No class :( */
  span[style="color:blue;font-family:monospace;font-weight:bold;font-size:90%;cursor:help;"] {
      color: #48a !important;
  }
  body .autres-projets,
  body #isOnCommons {
      border-color: #555 !important;
      background-color: #223 !important;
  }
  body #bandeau-page,
  body .bandeau-page {
      background-color: #282828;
  }
  body .titre_journee * {
    color: #ccc !important;
  }
  
  /* wikinews (en) */
  body .the_table {
      background-color: #222;
      border-color: #333;
  }
  body .mp_header {
      background-color: #123;
      border: 1px solid #333;
  }
  body #social_bookmarks {
      background-color: #333 !important;
      border-color: #234 !important;
  }
  body table.xambox {
      background-color: #333;
      border-color: #555;
  }
  body .imbox {
      background-color: #333;
  }
  
  /* wikibooks (ca) */
  
  body .sharedUploadNotice {
      border-color: #555 !important;
      background-color: unset !important;
  }
  body .divlang,
  #navegar div,
  #navegar #toc {
      border-color: #555 !important;
      background-color: #333 !important;
  }
  #navegar img {
      filter: contrast(0%);
  }
  
  body .ns-1 {
      background-color: #222 !important;
  }
  
  body .mw-parser-output .community-wishlist-survey-schedule {
      background: #224;
  }
  
  body .oo-ui-buttonElement-framed.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button {
      color: #ccc !important;
      background-color: #246;
      background-image: linear-gradient(to bottom,#222 0,#357 100%);
      border: 1px solid #579;
  }
  
  body .statstable > * > tr > th {
      background-color: #224;
      border-color #448;
  }
  body .statstable > * > tr > td {
      background-color: #223;
      border-color #448;
  }
  body .statstable > * > tr.tux-statstable-even > td {
      background-color: #112;
  }
  
  
  /* wikipedia (fr) */
  body .onglets-clearfix,
  body .exemple {
      /* Why insisting using white background everywhere ???? */
      background: unset !important;
      background-color: unset !important;
  }
  body .request-done {
      border-color: #555 !important;
      background-color: #223 !important;
  }
  body table[style*="background-color: #f9f9f9;"] {
      border-color: #555 !important;
      background-color: #333 !important;
  }
  body .request-pending {
      border-color: #555 !important;
  }
  body .BarChartTemplate {
      border-color: #359 !important;
      background-color: #113 !important;
  }
  body .infobox_v2 * {
      text-shadow: unset !important;
  }
  body .onglet,
  body .onglets-cadre {
      background-color: #222 !important;
  }
  body .bma {
    background-color: #333 !important;
  }
  body [style*="background-color:#009EE0"] {
    background-color:#034 !important;
  }
  body .cadre_portail
  {
    background-color: #223 !important;
    border-color: #555 !important;
  }
  .cadre_portail img[alt="icône décorative"]
  {
    filter: invert(0.8) hue-rotate(180deg);
  }
  body .article-audio {
    background-color: #333 !important;
    border-color: #555 !important;
  }
  
  
  /* wikiquotes (es) */
  .MainPageBG {
      border-color #555 !important;
      background-color: #222 !important;
  }
  #mf-FDD #toc table {
      background-color: #432;
  }
  #mf-FDD #toc table div {
      color: #29c !important;
  }
  .MainPageBG table .MainPageBG table td{
      border: 2px solid #754 !important;
  }
  .BGorange2 {
      background-color: #432 !important;
      border: 2px solid #754 !important;
  }
  
  /* wikisource (es) */
  body .mw-parser-output .bp-main {
      box-shadow: 0 0 .3em #764;
      background-color: #2c2824;
  }
  
  /* wikipedia (es) */
  body .mw-parser-output .flexquote {
    background-color: #2c2c2c;
    border-color: #444458;
  }
  
  /* wikipedia (en) */
  body .mw-parser-output .navbox-abovebelow,
  body .mw-parser-output .navbox-group,
  body .mw-parser-output .navbox-subgroup .navbox-title {
    background-color: #123 !important;
  }
  body .mw-parser-output .side-box {
      background-color: #233 !important;
      border-color: #444;
  }
  body .mw-parser-output .quotebox {
      background-color: #223 !important;
      border-color: #555;
  }
  body .mw-parser-output #mp-topbanner {
    background: #282828;
    border-color: #555;
  }
  body .mw-parser-output #mp-left {
    background: #232523;
    border-color: #343;
  }
  body .mw-parser-output #mp-left .mp-h2 {
    background: #232;
    border-color: #3438;
  }
  body .mw-parser-output #mp-lower,
  body .mw-parser-output #mp-right {
    background: #232328;
    border-color: #334;
  }
  body .mw-parser-output #mp-lower .mp-h2,
  body .mw-parser-output #mp-right .mp-h2 {
    background: #223;
    border-color: #3348;
  }
  
  body .mw-parser-output tr + tr > .navbox-abovebelow,
  body .mw-parser-output tr + tr > .navbox-group,
  body .mw-parser-output tr + tr > .navbox-image,
  body .mw-parser-output tr + tr > .navbox-list {
      border-color: #555 !important;
  }
  body table.infobox th.infobox-label {
    background-color: #234 !important;
  }
  
  table.toccolours tr:first-child th {
      background-color: #334 !important;
  }
  table.toccolours tr:not(:first-child) th {
      background-color: #447 !important;
  }
  
  body .vevent {
      background-color: #333 !important;
  }
  
  body table .table-no2 {
      background: #422 !important;
      color: unset !important;
  }
  
  body .mw-parser-output .sidebar {
      background: #333;
      border: 1px solid #478;
  }
  
  body .mw-contributions-footer, body .mw-contributions-footer table {
      background-color: #272727 !important;
      border-color: #555 !important;
  }
  
  body th.mbox-text, body td.mbox-text {
      color: unset !important;
  }
  
  body .mw-parser-output #teahouseheader .main {
      background-color: #232 !important;
  }
  
  #teahouseheader .thh-left {
      background: linear-gradient(to bottom right, #eee, #232);
      padding: 0.5em;
  }
  
  body .mw-parser-output .module-shortcutboxplain
  {
    background-color: #334;
    border-color: #555;
  }
  body .mw-parser-output .comportal-blocks
  {
    background-color: #333;
    color: #ccc;
  }
  body .mw-parser-output .tpl-vp-sections { background-color: #334; }
  body .mw-parser-output .tpl-vp-heading  { background-color: #445; }
  body .mw-parser-output .ombox,
  body .mw-parser-output .tpl-vp-sections,
  body .mw-parser-output .tpl-vp-blocks,
  body .mw-parser-output .tpl-vp-block,
  body .mw-parser-output .comportal-block
  { border-color: #555; }
  body .mw-parser-output .comportal-section h2
  { background-color: #135; }
  body .mw-parser-output .sister-bar
  {
    background-color: #333;
    border-color: #555;
  }
  body .mw-parser-output .navbox { border-color: #059; }
  body .comportal-section div[role=complementary] { border-color: #588 !important; }
  body .mw-parser-output .box,
  body .mw-parser-output .comportal-section
  {
    border-color: #777 !important;
  }
  body .mw-parser-output #box-1 { background-color: #203034; }
  body .mw-parser-output #box-2 { background-color: #343020; }
  body .mw-parser-output #box-3 { background-color: #303c33; }
  body .mw-parser-output #box-4 { background-color: #373037; }
  body .mw-parser-output #box-5 { background-color: #443; }
  body .mw-parser-output .box-header { border-color: #222 !important; }
  body .mw-parser-output #box-1 .box-header { background-color: #304044 !important; }
  body .mw-parser-output #box-2 .box-header { background-color: #444030 !important; }
  body .mw-parser-output #box-3 .box-header { background-color: #404c43 !important; }
  body .mw-parser-output #box-4 .box-header { background-color: #474047 !important; }
  body .mw-parser-output #box-5 .box-header { background-color: #332 !important; }
  body .mw-parser-output .improvement-of-the-week
  {
    background-color: #333;
    border-color: #355;
  }
  body table.mw-collapsible { border-color: #753; }
  body .mw-parser-output .centralized-discussion-title,
  body .mw-parser-output .centralized-discussion-vps,
  body .mw-parser-output .centralized-discussion-navbar
  { background-color: #134; }
  body .mw-parser-output .centralized-discussion-image,
  body .mw-parser-output .centralized-discussion-list,
  body .mw-parser-output .centralized-discussion-meta,
  body .mw-parser-output .centralized-discussion-ongoing,
  body .mw-parser-output .centralized-discussion-navbar
  { border-color: #555; }
  body #box-6 .sidebar {
    background-color: #3c3830 !important;
    border-color: #754 !important;
  }
  img[alt="The Signpost"] { filter: invert(0.8); }
  
  /* wikidata */
  .mw-parser-output .wd-mp-header {
      color: #888 !important;
  }
  .mw-parser-output .wd-mp-headerbox,
  .mw-parser-output .wd-mp-subheader > div {
      background: #222e !important;
  }
  .wd-mp-headerimage {
      filter: invert();
  }
  body .wikibase-referenceview {
      background-color: #2c2c2c;
  }
  body .wb-preferred .wikibase-statementview-mainsnak {
      background-color: #292b29;
  }
  body .wb-deprecated .wikibase-statementview-mainsnak {
      background-color: #332929;
  }
  body .wd-box {
    background-color: #223;
    color: #ccc !important;
  }
  body .wd-box strong {
    color: #ccc !important;
  }
  body .wd-box strong img {
    filter: invert(1) contrast(0.4);
  }
  body .wd-box div {
    color: #aaa !important;
  }
  body .mw-content-ltr {
    background-color: #222 !important;
  }
  
  /* wikipedia (it) */
  
  body .sinottico, body .sinottico th {
      background-color: #333;
  }
  body .sinottico > tbody > tr > th:not(:only-child),
  body .sinottico_annidata > tbody > tr > th:not(:only-child) {
    background-color: #223;
    border-color: #555;
  }
  body .sinottico {
    border-color: #257;
  }
  body .sinottico > tbody > tr:not(:last-child) > td,
  body .sinottico > tbody > tr:not(:last-child) > th,
  body .sinottico_annidata > tbody > tr > td,
  body .sinottico_annidata > tbody > tr > th {
    border-color: #025;
  }
  
  /* wikibooks (de) */
  .regal {
      background-color: #33302c !important;
  }
  .kasten-interwiki {
      border-color: #577 !important;
      background-color: #455 !important;
  }
  
  /* wikipedia (de) */
  
  body .mw-parser-output .hauptseite-box-title {
      background-color: #345;
  }
  
  body .mw-parser-output .hauptseite-box-content,
  body .mw-parser-output .hauptseite-preview-wikidata {
      background-color: #272727;
      border-color: #555 !important;
  }
  
  /* In case of abusive usage of background style without CSS class. */
  body .gallery[style*="background"]:not([style*="background:none"]),
  body [style*="background"]:not([class]):not([style*="transparent"]):not([style*="background:none"]) {
      background-color: #333 !important;
      color: #ccc !important;
  }
  
  /* Fix unreadable text */
  body .mw-parser-output .templatebox-desc {
      text-shadow: none !important;
      font-size: inherit !important;
  }
  
  body .protected,
  body .mw-parser-output .templatebox-languagedependant,
  body .mw-parser-output .templatebox-usagesample,
  body .toptextcells,
  body .catlinks {
      background-color: #333 !important;
      border-color: #555 !important;
  }
  
  body .toptextcells td[style*="background:#DDDDDD;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background:#DDDDEE;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background:#DDEEDD;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background:#DDEEEE;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background:#EEDDDD;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background:#EEDDEE;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background:#EEEEDD;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background:#EEEEEE;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background-color:#DDDDDD;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background-color:#DDDDEE;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background-color:#DDEEDD;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background-color:#DDEEEE;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background-color:#EEDDDD;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background-color:#EEDDEE;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background-color:#EEEEDD;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background-color:#EEEEEE;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background:#ddd;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background:#dde;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background:#ded;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background:#dee;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background:#edd;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background:#ede;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background:#eed;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background:#eee;"] { background-color: #eee2 !important; }
  
  body .toptextcells td[style*="background-color:#ddd;"] { background-color: #ddd2 !important; }
  body .toptextcells td[style*="background-color:#dde;"] { background-color: #dde2 !important; }
  body .toptextcells td[style*="background-color:#ded;"] { background-color: #ded2 !important; }
  body .toptextcells td[style*="background-color:#dee;"] { background-color: #dee2 !important; }
  body .toptextcells td[style*="background-color:#edd;"] { background-color: #edd2 !important; }
  body .toptextcells td[style*="background-color:#ede;"] { background-color: #ede2 !important; }
  body .toptextcells td[style*="background-color:#eed;"] { background-color: #eed2 !important; }
  body .toptextcells td[style*="background-color:#eee;"] { background-color: #eee2 !important; }
  
  body .FragenWP-rechts > div {
      border-color: #457 !important;
  }
  body .FragenWP-rechts > div > div {
      background-color: #333 !important;
      border-color: #347 !important;
  }
  
  body table > * > tr.hintergrundfarbe1 > th,
  table > * > tr > th.hintergrundfarbe1,
  table.hintergrundfarbe1,
  .hintergrundfarbe1 {
      background-color: #333;
  }
  
  body table > * > tr.hintergrundfarbe2 > th,
  table > * > tr > th.hintergrundfarbe2,
  table.hintergrundfarbe2,
  .hintergrundfarbe2 {
      background-color: #222;
  }
  
  body table > * > tr.hintergrundfarbe3 > th,
  table > * > tr > th.hintergrundfarbe3,
  table.hintergrundfarbe3,
  .hintergrundfarbe3 {
      background-color: #650;
  }
  
  body table > * > tr.hintergrundfarbe4 > th,
  table > * > tr > th.hintergrundfarbe4,
  table.hintergrundfarbe4,
  .hintergrundfarbe4 {
      background-color: #640;
  }
  
  body table > * > tr.hintergrundfarbe5 > th,
  body table > * > tr > th.hintergrundfarbe5,
  body table.hintergrundfarbe5,
  body .hintergrundfarbe5 {
      background-color: #345;
  }
  
  body table > * > tr.hintergrundfarbe6 > th,
  body table > * > tr > th.hintergrundfarbe6,
  body table.hintergrundfarbe6,
  body .hintergrundfarbe6 {
      background-color: #237;
  }
  
  body table > * > tr.hintergrundfarbe7 > th,
  body table > * > tr > th.hintergrundfarbe7,
  body table.hintergrundfarbe7,
  body .hintergrundfarbe7 {
      background-color: #522;
  }
  
  body table > * > tr.hintergrundfarbe8 > th,
  body table > * > tr > th.hintergrundfarbe8,
  body table.hintergrundfarbe8,
  body .hintergrundfarbe8 {
      background-color: #760;
  }
  
  body table > * > tr.hintergrundfarbe9 > th,
  body table > * > tr > th.hintergrundfarbe9,
  body table.hintergrundfarbe9,
  body .hintergrundfarbe9 {
      background-color: #254;
  }
  
  
  /* Syntax highlight */
  /*   - Page type JS / CSS */
  body .mw-content-ltr.mw-highlight span[id] .linenos {
      left: -3.5em;
  }
  /*   - Page type JS / CSS  and  syntaxhighlight */
  body .mw-content-ltr.mw-highlight .linenos {
      color: black;
      display: inline-block; /* Try to fix problem of misposition by some browser */
  }
  
  body .mw-highlight {
      background: unset !important;
  }
  body .mw-highlight pre {
      background: #333 !important;
  }
  body .mw-highlight pre span,
  body code.mw-highlight span {
      filter: brightness(155%);
  }
  
  body .mw-highlight .gp {
      color: #279;
  }
  body .mw-highlight .ss {
      color: #26f;
  }
  body .mw-highlight .s {
      color: #f42;
  }
  body .mw-highlight .vm,
  body .mw-highlight .fm {
      color: #2c728a;
  }
  body .mw-highlight .hll {
      background-color: #023;
  }
  body .mw-highlight .mi {
      color: #aaa;
  }
  
  body .mw-highlight .nn,
  body .mw-highlight .nc {
      color: #79f;
  }
  body .mw-highlight .nf {
      color: #49f;
  }
  body .mw-highlight .nv {
      color: #17f;
  }
  body .mw-highlight .vg {
      color: #1977ff;
  }
  body .mw-highlight .o {
      color: #44cccc;
  }
  body .mw-highlight .vi {
      color: #15f;
  }
  body .mw-highlight .vc {
      color: #46f;
  }
  body .mw-highlight .nt {
      color: #00b000;
  }
  body .mw-highlight .na {
      color: #aac029;
  }
  
  /* Boxes */
  
  #mw-indicator-mw-helplink a {
      background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/c9/Help-lightgray.svg);
  }
  
  .mw-indicators {
  background-color: unset;
  /*border-radius: 5px;
  padding: 2px;*/
  }
  
  
  /* UI icons */
  body .oo-ui-icon-bell,
  body .mw-ui-icon-bell::before,
  body .oo-ui-icon-tray,
  body .mw-ui-icon-tray::before,
  body .mw-ui-icon-wikimedia-watchlist::before,
  body .mw-ui-icon-wikimedia-userAvatar::before,
  body .oo-ui-icon-bookmark,
  body .mw-ui-icon-bookmark::before,
  body .oo-ui-icon-trash,
  body .mw-ui-icon-trash::before,
  body .oo-ui-indicatorElement-indicator,
  body .oo-ui-iconElement-icon {
    filter: invert(0.8);
  }
  
  /* UI buttons */
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
    background-color: #333;
  }
  body .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover {
    background-color: #047;
  }
  
  /*
  body .vector-user-menu-legacy #pt-anonuserpage,
  body .vector-user-menu-legacy #pt-tmpuserpage,
  body .vector-user-menu-legacy #pt-userpage a {
    filter: brightness(1.4);
  }
  */
  
  
  /* Actions */
  
  #p-cactions ul li, #p-cactions ul li a {
      border-radius: 0;
  }
  
  #p-cactions li.selected {
      background-color: #222;
      border-color: #fabd23;
  }
  
  #p-cactions li a {
      background-color: #334 !important;
  }
  
  
  /* Invert for rendering <math> */
  body .mwe-math-fallback-image-inline, .mwe-math-fallback-image-display {
      /*background-color: #ccc !important;*/
      filter: invert(1) brightness(75%) hue-rotate(180deg) !important;
  }
  
  body .mw-hiero-table {
  }
  
  body .mw-hiero-table img {
      background-color: #ccc !important;
      filter: invert(1) brightness(75%);
  }
  
  figure,
  div.thumbinner {
      border-color: #478 !important;
      background-color: #555 !important;
  }
  
  html figure[typeof=mw:File/Thumb] img,
  html img.thumbimage {
      background-color: #777 !important;
      border: 1px solid #478 !important;
  }
  
  img.transparent:not(figure[typeof=mw:File/Thumb] img),
  img.transparent:not(.thumbimage) {
      background-color: #ccc !important;
      border: 1px solid #999 !important;
      padding: 1em;
  }
  
  li.gallerybox figure[typeof=mw:File/Thumb],
  li.gallerybox div.thumb {
      border-color: #79a !important;
      background-color: #444 !important;
  }
  li.gallerybox figure[typeof=mw:File/Thumb] img,
  li.gallerybox div.thumb img {
      background-color: #ccc !important;
  }
  
  .mw-toolbox, *.mw-toolbox, body div.mw-toolbox {
      background: #222 !important;
      border-color: #448 !important;
  }
  
  h1, h2, h3, h4, h5, h6 {
      color: #eee;
  }
  
  div.titreprojet {
      color: #478 !important;
  }
  
  body .mw_metadata th, body .mw_metadata td {
      background-color: #224 !important;
  }
  
  .warningbox, div.livre-vitrine, div.template-documentation, div.livresprojet, div.texteprojet, div.navboxlivre, body .etiquette, body .cduinfo, body .cadre, body div.bandeautexte, .nopagetext, div.template-documentation, div.docbandeau, div.docmodele, div.entete-bistro, div.urgence, div.boite-invisible > div, body .boite {
      background-color: #222 !important;
  }
  body .bandeau,
  body .etiquette {
    border-top-color: #8888;
    border-bottom-color: #8888;
    border-right-color: #8888;
  }
  
  body .cadretitre {
      background-color: #258 !important;
  }
  
  body .mw-parser-output .taxontree-lcell, body .mw-parser-output .wikidatainfobox-lcell {
      background: #334 !important;
  }
  
  body #wdinfo_ac th {
      background-color: #348 !important;
  }
  
  
  table.inforemarque, div.navboxtitre, body div#sisterproject, body .otherprojects, body .otherprojects p, body span.touche, body #vandale {
      background-color: #333 !important;
  }
  
  body .vega, div.accueiltitre {
      background-color: #555 !important;
  }
  
  table td.livre-accueil, body div.bandeautitre, body .licence, body .mw-parser-output #wdinfoboxcaption {
      background-color: #444 !important;
  }
  
  body .bloc-citation {
      background-color: #224 !important;
      border-color: #447 !important;
  }
  
  body #FlickrReview {
      background-color: #234 !important;
  }
  
  body.page-Wikipédia_Accueil_principal .mw-content-text div.plainlinks {
      color: unset !important;
  }
  
  body .boite-grise {
      background-color: #c7c7c71b !important;
  }
  
  body.page-Wikipédia_Accueil_principal .mw-content-text div.plainlinks div, body #histlegend {
      background-color: #222 !important;
      color: unset !important;
  }
  
  body #accueil_2017_en-tete {
      background: linear-gradient(to bottom,#333,#eff) !important;
  }
  body .NavHead{
      background-color: #448 !important;
      color: #ccc !important;
  }
  body .NavFrame, body .NavContent, body .selectionarticle {
      background-color: #333 !important;
  }
  
  body.cafe dl, body.cafe dl dl dl, body.cafe dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl dl {
      background-color: #231 !important;
  }
  
  body.cafe dl dl, body.cafe dl dl dl dl, body.cafe dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl, body.cafe dl dl dl dl dl dl dl dl dl dl {
      background-color: #222 !important;
  }
  
  body.ns--1 #content, body.ns--2 #content {
      background-blend-mode: color-burn;
  }
  
  /* Translate */
  
  .ext-translate-container .tux-messagelist .tux-message-pagemode .tux-message-item-compact {
      background-color: #333 !important;
      color: #ccc !important;
  }
  .ext-translate-container .tux-messagelist .tux-message-pagemode {
      background-color: #222 !important;
      color: #ccc !important;
  }
  .ext-translate-container .tux-messagelist .tux-message-pagemode .tux-message-item-compact:hover {
      background-color: #3388cc !important;
      color: #ccc !important;
  }
  .tux-messagelist .tux-message-pagemode .tux-pagemode-source,
  .tux-messagelist .tux-message-pagemode .tux-pagemode-translation {
      color: unset !important;
  }`