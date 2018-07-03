import React from 'react'
// import './viewer.css'

export default class extends React.Component{
    render(){
        return(
            <div>
                <h3>El Component para PDF Viewer...</h3>
                <hr/>

                
                <div dir="ltr" mozdisallowselectionprint moznomarginboxes>
                    <div>
                        
                        <link rel="resource" type="application/l10n" href="locale/locale.properties" />
                        <script src="../build/pdf.js"></script>
                        <script src="viewer.js"></script>

                    </div>

                    <div tabindex="1" className="loadingInProgress">
                        <div id="outerContainer">

                        <div id="sidebarContainer">
                            <div id="toolbarSidebar">
                                <div className="splitToolbarButton toggled">
                                    <button id="viewThumbnail" className="toolbarButton toggled" title="Show Thumbnails" tabindex="2" data-l10n-id="thumbs">
                                    <span data-l10n-id="thumbs_label">Thumbnails</span>
                                    </button>
                                    <button id="viewOutline" className="toolbarButton" title="Show Document Outline (double-click to expand/collapse all items)" tabindex="3" data-l10n-id="document_outline">
                                    <span data-l10n-id="document_outline_label">Document Outline</span>
                                    </button>
                                    <button id="viewAttachments" className="toolbarButton" title="Show Attachments" tabindex="4" data-l10n-id="attachments">
                                    <span data-l10n-id="attachments_label">Attachments</span>
                                    </button>
                                </div>
                            </div>
                            <div id="sidebarContent">
                                <div id="thumbnailView"></div>
                                <div id="outlineView" className="hidden"></div>
                                <div id="attachmentsView" className="hidden"></div>
                            </div>
                        </div>

                        <div id="mainContainer">
                            <div className="findbar hidden doorHanger" id="findbar">
                            <div id="findbarInputContainer">
                                <input id="findInput" className="toolbarField" title="Find" placeholder="Find in document…" tabindex="91" data-l10n-id="find_input" />
                                <div className="splitToolbarButton">
                                <button id="findPrevious" className="toolbarButton findPrevious" title="Find the previous occurrence of the phrase" tabindex="92" data-l10n-id="find_previous">
                                    <span data-l10n-id="find_previous_label">Previous</span>
                                </button>
                                <div className="splitToolbarButtonSeparator"></div>
                                <button id="findNext" className="toolbarButton findNext" title="Find the next occurrence of the phrase" tabindex="93" data-l10n-id="find_next">
                                    <span data-l10n-id="find_next_label">Next</span>
                                </button>
                                </div>
                            </div>

                            <div id="findbarOptionsContainer">
                                <input type="checkbox" id="findHighlightAll" className="toolbarField" tabindex="94" />
                                <label for="findHighlightAll" className="toolbarLabel" data-l10n-id="find_highlight">Highlight all</label>
                                <input type="checkbox" id="findMatchCase" className="toolbarField" tabindex="95" />
                                <label for="findMatchCase" className="toolbarLabel" data-l10n-id="find_match_case_label">Match case</label>
                                <span id="findResultsCount" className="toolbarLabel hidden"></span>
                            </div>

                            <div id="findbarMessageContainer">
                                <span id="findMsg" className="toolbarLabel"></span>
                            </div>
                            </div>  

                            <div id="secondaryToolbar" className="secondaryToolbar hidden doorHangerRight">
                            <div id="secondaryToolbarButtonContainer">
                                <button id="secondaryPresentationMode" className="secondaryToolbarButton presentationMode visibleLargeView" title="Switch to Presentation Mode" tabindex="51" data-l10n-id="presentation_mode">
                                <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                                </button>

                                <button id="secondaryOpenFile" className="secondaryToolbarButton openFile visibleLargeView" title="Open File" tabindex="52" data-l10n-id="open_file">
                                <span data-l10n-id="open_file_label">Open</span>
                                </button>

                                <button id="secondaryPrint" className="secondaryToolbarButton print visibleMediumView" title="Print" tabindex="53" data-l10n-id="print">
                                <span data-l10n-id="print_label">Print</span>
                                </button>

                                <button id="secondaryDownload" className="secondaryToolbarButton download visibleMediumView" title="Download" tabindex="54" data-l10n-id="download">
                                <span data-l10n-id="download_label">Download</span>
                                </button>

                                <a href="#" id="secondaryViewBookmark" className="secondaryToolbarButton bookmark visibleSmallView" title="Current view (copy or open in new window)" tabindex="55" data-l10n-id="bookmark">
                                <span data-l10n-id="bookmark_label">Current View</span>
                                </a>

                                <div className="horizontalToolbarSeparator visibleLargeView"></div>

                                <button id="firstPage" className="secondaryToolbarButton firstPage" title="Go to First Page" tabindex="56" data-l10n-id="first_page">
                                <span data-l10n-id="first_page_label">Go to First Page</span>
                                </button>
                                <button id="lastPage" className="secondaryToolbarButton lastPage" title="Go to Last Page" tabindex="57" data-l10n-id="last_page">
                                <span data-l10n-id="last_page_label">Go to Last Page</span>
                                </button>

                                <div className="horizontalToolbarSeparator"></div>

                                <button id="pageRotateCw" className="secondaryToolbarButton rotateCw" title="Rotate Clockwise" tabindex="58" data-l10n-id="page_rotate_cw">
                                <span data-l10n-id="page_rotate_cw_label">Rotate Clockwise</span>
                                </button>
                                <button id="pageRotateCcw" className="secondaryToolbarButton rotateCcw" title="Rotate Counterclockwise" tabindex="59" data-l10n-id="page_rotate_ccw">
                                <span data-l10n-id="page_rotate_ccw_label">Rotate Counterclockwise</span>
                                </button>

                                <div className="horizontalToolbarSeparator"></div>

                                <button id="cursorSelectTool" className="secondaryToolbarButton selectTool toggled" title="Enable Text Selection Tool" tabindex="60" data-l10n-id="cursor_text_select_tool">
                                <span data-l10n-id="cursor_text_select_tool_label">Text Selection Tool</span>
                                </button>
                                <button id="cursorHandTool" className="secondaryToolbarButton handTool" title="Enable Hand Tool" tabindex="61" data-l10n-id="cursor_hand_tool">
                                <span data-l10n-id="cursor_hand_tool_label">Hand Tool</span>
                                </button>

                                <div className="horizontalToolbarSeparator"></div>

                                <button id="documentProperties" className="secondaryToolbarButton documentProperties" title="Document Properties…" tabindex="62" data-l10n-id="document_properties">
                                <span data-l10n-id="document_properties_label">Document Properties…</span>
                                </button>
                            </div>
                            </div>  

                            <div className="toolbar">
                            <div id="toolbarContainer">
                                <div id="toolbarViewer">
                                <div id="toolbarViewerLeft">
                                    <button id="sidebarToggle" className="toolbarButton" title="Toggle Sidebar" tabindex="11" data-l10n-id="toggle_sidebar">
                                    <span data-l10n-id="toggle_sidebar_label">Toggle Sidebar</span>
                                    </button>
                                    <div className="toolbarButtonSpacer"></div>
                                    <button id="viewFind" className="toolbarButton" title="Find in Document" tabindex="12" data-l10n-id="findbar">
                                    <span data-l10n-id="findbar_label">Find</span>
                                    </button>
                                    <div className="splitToolbarButton hiddenSmallView">
                                    <button className="toolbarButton pageUp" title="Previous Page" id="previous" tabindex="13" data-l10n-id="previous">
                                        <span data-l10n-id="previous_label">Previous</span>
                                    </button>
                                    <div className="splitToolbarButtonSeparator"></div>
                                    <button className="toolbarButton pageDown" title="Next Page" id="next" tabindex="14" data-l10n-id="next">
                                        <span data-l10n-id="next_label">Next</span>
                                    </button>
                                    </div>
                                    <input type="number" id="pageNumber" className="toolbarField pageNumber" title="Page" value="1" size="4" min="1" tabindex="15" data-l10n-id="page" />
                                    <span id="numPages" className="toolbarLabel"></span>
                                </div>
                                <div id="toolbarViewerRight">
                                    <button id="presentationMode" className="toolbarButton presentationMode hiddenLargeView" title="Switch to Presentation Mode" tabindex="31" data-l10n-id="presentation_mode">
                                    <span data-l10n-id="presentation_mode_label">Presentation Mode</span>
                                    </button>

                                    <button id="openFile" className="toolbarButton openFile hiddenLargeView" title="Open File" tabindex="32" data-l10n-id="open_file">
                                    <span data-l10n-id="open_file_label">Open</span>
                                    </button>

                                    <button id="print" className="toolbarButton print hiddenMediumView" title="Print" tabindex="33" data-l10n-id="print">
                                    <span data-l10n-id="print_label">Print</span>
                                    </button>

                                    <button id="download" className="toolbarButton download hiddenMediumView" title="Download" tabindex="34" data-l10n-id="download">
                                    <span data-l10n-id="download_label">Download</span>
                                    </button>
                                    <a href="#" id="viewBookmark" className="toolbarButton bookmark hiddenSmallView" title="Current view (copy or open in new window)" tabindex="35" data-l10n-id="bookmark">
                                    <span data-l10n-id="bookmark_label">Current View</span>
                                    </a>

                                    <div className="verticalToolbarSeparator hiddenSmallView"></div>

                                    <button id="secondaryToolbarToggle" className="toolbarButton" title="Tools" tabindex="36" data-l10n-id="tools">
                                    <span data-l10n-id="tools_label">Tools</span>
                                    </button>
                                </div>
                                <div id="toolbarViewerMiddle">
                                    <div className="splitToolbarButton">
                                    <button id="zoomOut" className="toolbarButton zoomOut" title="Zoom Out" tabindex="21" data-l10n-id="zoom_out">
                                        <span data-l10n-id="zoom_out_label">Zoom Out</span>
                                    </button>
                                    <div className="splitToolbarButtonSeparator"></div>
                                    <button id="zoomIn" className="toolbarButton zoomIn" title="Zoom In" tabindex="22" data-l10n-id="zoom_in">
                                        <span data-l10n-id="zoom_in_label">Zoom In</span>
                                    </button>
                                    </div>
                                    <span id="scaleSelectContainer" className="dropdownToolbarButton">
                                        <select id="scaleSelect" title="Zoom" tabindex="23" data-l10n-id="zoom">
                                            <option id="pageAutoOption" title="" value="auto" selected="selected" data-l10n-id="page_scale_auto">Automatic Zoom</option>
                                            <option id="pageActualOption" title="" value="page-actual" data-l10n-id="page_scale_actual">Actual Size</option>
                                            <option id="pageFitOption" title="" value="page-fit" data-l10n-id="page_scale_fit">Page Fit</option>
                                            <option id="pageWidthOption" title="" value="page-width" data-l10n-id="page_scale_width">Page Width</option>
                                            <option id="customScaleOption" title="" value="custom" disabled="disabled" hidden="true"></option>
                                            <option title="" value="0.5" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 50 }'>50%</option>
                                            <option title="" value="0.75" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 75 }'>75%</option>
                                            <option title="" value="1" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 100 }'>100%</option>
                                            <option title="" value="1.25" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 125 }'>125%</option>
                                            <option title="" value="1.5" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 150 }'>150%</option>
                                            <option title="" value="2" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 200 }'>200%</option>
                                            <option title="" value="3" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 300 }'>300%</option>
                                            <option title="" value="4" data-l10n-id="page_scale_percent" data-l10n-args='{ "scale": 400 }'>400%</option>
                                        </select>
                                    </span>
                                </div>
                                </div>
                                <div id="loadingBar">
                                <div className="progress">
                                    <div className="glimmer">
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <menu type="context" id="viewerContextMenu">
                                <menuitem id="contextFirstPage" label="First Page" data-l10n-id="first_page"></menuitem>
                                <menuitem id="contextLastPage" label="Last Page" data-l10n-id="last_page"></menuitem>
                                <menuitem id="contextPageRotateCw" label="Rotate Clockwise" data-l10n-id="page_rotate_cw"></menuitem>
                                <menuitem id="contextPageRotateCcw" label="Rotate Counter-Clockwise" data-l10n-id="page_rotate_ccw"></menuitem>
                            </menu>

                            <div id="viewerContainer" tabindex="0">
                            <div id="viewer" className="pdfViewer"></div>
                            </div>

                            <div id="errorWrapper" hidden='true'>
                            <div id="errorMessageLeft">
                                <span id="errorMessage"></span>
                                <button id="errorShowMore" data-l10n-id="error_more_info">More Information</button>
                                <button id="errorShowLess" data-l10n-id="error_less_info" hidden='true'>Less Information</button>
                            </div>
                            <div id="errorMessageRight">
                                <button id="errorClose" data-l10n-id="error_close">Close</button>
                            </div>
                            <div className="clearBoth"></div>
                            <textarea id="errorMoreInfo" hidden='true' readonly="readonly"></textarea>
                            </div>
                        </div> 

                        <div id="overlayContainer" className="hidden">
                            <div id="passwordOverlay" className="container hidden">
                            <div className="dialog">
                                <div className="row">
                                <p id="passwordText" data-l10n-id="password_label">Enter the password to open this PDF file:</p>
                                </div>
                                <div className="row">
                                    <input type="password" id="password" className="toolbarField" />
                                </div>
                                <div className="buttonRow">
                                <button id="passwordCancel" className="overlayButton"><span data-l10n-id="password_cancel">Cancel</span></button>
                                <button id="passwordSubmit" className="overlayButton"><span data-l10n-id="password_ok">OK</span></button>
                                </div>
                            </div>
                            </div>
                            <div id="documentPropertiesOverlay" className="container hidden">
                            <div className="dialog">
                                <div className="row">
                                <span data-l10n-id="document_properties_file_name">File name:</span> <p id="fileNameField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_file_size">File size:</span> <p id="fileSizeField">-</p>
                                </div>
                                <div className="separator"></div>
                                <div className="row">
                                <span data-l10n-id="document_properties_title">Title:</span> <p id="titleField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_author">Author:</span> <p id="authorField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_subject">Subject:</span> <p id="subjectField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_keywords">Keywords:</span> <p id="keywordsField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_creation_date">Creation Date:</span> <p id="creationDateField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_modification_date">Modification Date:</span> <p id="modificationDateField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_creator">Creator:</span> <p id="creatorField">-</p>
                                </div>
                                <div className="separator"></div>
                                <div className="row">
                                <span data-l10n-id="document_properties_producer">PDF Producer:</span> <p id="producerField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_version">PDF Version:</span> <p id="versionField">-</p>
                                </div>
                                <div className="row">
                                <span data-l10n-id="document_properties_page_count">Page Count:</span> <p id="pageCountField">-</p>
                                </div>
                                <div className="buttonRow">
                                <button id="documentPropertiesClose" className="overlayButton"><span data-l10n-id="document_properties_close">Close</span></button>
                                </div>
                            </div>
                            </div>
                            <div id="printServiceOverlay" className="container hidden">
                            <div className="dialog">
                                <div className="row">
                                <span data-l10n-id="print_progress_message">Preparing document for printing…</span>
                                </div>
                                <div className="row">
                                <progress value="0" max="100"></progress>
                                <span data-l10n-id="print_progress_percent" data-l10n-args='{ "progress": 0 }' className="relative-progress">0%</span>
                                </div>
                                <div className="buttonRow">
                                <button id="printCancel" className="overlayButton"><span data-l10n-id="print_progress_close">Cancel</span></button>
                                </div>
                            </div>
                            </div>
                        </div>  

                        </div> 
                        <div id="printContainer">
                            <div>Here goes PDF...</div>
                            <object class="doc" data={"compressed.tracemonkey-pldi-09.pdf" } type="application/pdf"></object>
                        </div>
                    </div>
                </div>
                
                    



            </div>
        )
    }
}
