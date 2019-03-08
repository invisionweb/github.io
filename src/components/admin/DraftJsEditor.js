import React, { Component } from "react"
import {
    Editor,
    EditorState,
    RichUtils,
    convertToRaw,
    CompositeDecorator,
    Modifier,
    Entity,
    ContentState,
    ContentBlock,
    SelectionState,
    getDefaultKeyBinding,
    KeyBindingUtil,
    AtomicBlockUtils
} from "draft-js"
import $ from "jquery"
import isSoftNewlineEvent from "draft-js/lib/isSoftNewlineEvent"
import "./Draft.css"
import "../../stylesheets/draft-js-editor.css"
import { Button, IconButton, TextField } from "@material-ui/core"
import Link from "@material-ui/icons/Link"
import FormatBold from "@material-ui/icons/FormatBold"
import FormatItalic from "@material-ui/icons/FormatItalic"
import FormatUnderlined from "@material-ui/icons/FormatUnderlined"
import FormatListBulleted from "@material-ui/icons/FormatListBulleted"
import FormatListNumbered from "@material-ui/icons/FormatListNumbered"
import FormatQuote from "@material-ui/icons/FormatQuote"
import Code from "@material-ui/icons/Code"
import Image from "@material-ui/icons/Image"

class DraftJsEditor extends Component {
    constructor(props) {
        super(props)

        const compositeDecorator = new CompositeDecorator([
            // {
            //     strategy: handleStrategy,
            //     component: HandleSpan
            // },
            // {
            //     strategy: hashtagStrategy,
            //     component: HashtagSpan
            // },
            // {
            //     strategy: getEntityStrategy("IMMUTABLE"),
            //     component: TokenSpan
            // },
            {
                strategy: (contentBlock, callback, contentState) =>
                    getEntityStrategy(contentBlock, callback, contentState),
                component: LinkText
            },
            {
                strategy: (contentBlock, callback, contentState) =>
                    codeStrategy(contentBlock, callback, contentState),
                component: CodeBlock
            },
            {
                strategy: (contentBlock, callback, contentState) =>
                    imageStrategy(contentBlock, callback, contentState),
                component: ImageBlock
            }
        ])

        this.state = {
            editorState: EditorState.createEmpty(compositeDecorator),
            urlValue: "",
            showUrlInput: false,
            showHeaderLevels: false,
            editorPlaceHolder: true
        }

        this.focus = () => this.refs.editor.focus()
    }

    componentDidMount() {
        // this.fileSelector = buildFileSelector()
    }

    onChange = editorState => {
        this.setState(
            { editorState }
            // () => {
            // console.log("State change")
            // }
        )

        // this prints out the html of the editor
        // console.log(this.refs.editor.editor.innerHTML)
    }

    onTab = e => {
        const maxDepth = 4
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth))
    }

    myKeyBindingFn = (e, SyntheticKeyboardEvent) => {
        // console.log(e.keyCode)

        const { hasCommandModifier } = KeyBindingUtil
        if (e.keyCode === 13 /* `S` key */ && e.shiftKey) {
            // console.log("shift and enter pressed together")
            return "write-code-block"
        }
        return getDefaultKeyBinding(e)
    }

    handleKeyCommand(command, editorState) {
        // console.log(command)
        if (command === "write-code-block") {
            console.log("custom handleKeyCommand running")

            // TODO: HANDLE SHIFT ENTER COMMAND
            // USE MODIFIER
        }

        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            this.onChange(newState)
            return "handled"
        }
        return "not-handled"
    }

    handleReturn = e => {
        const { editorState } = this.state

        if (isSoftNewlineEvent(e)) {
            this.onChange(RichUtils.insertSoftNewline(editorState))
            return "handled"
        }
    }

    styleButtonClick(type) {
        this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type))
    }

    addLinkToSelection = () => {
        // get current content
        const editorState = this.state.editorState
        const contentstate = editorState.getCurrentContent()

        // create the entity to insert link
        let contentStateWithEntity = contentstate.createEntity("LINK", "MUTABLE", {
            url: this.state.urlValue
        })

        // Call getLastCreatedEntityKey to get the key of the newly created entity
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

        const newEditorState = EditorState.set(editorState, {
            currentContent: contentStateWithEntity
        })
        // const selectionState = editorState.getSelection()
        // console.log(selectionState)

        // Add the created entity to the current selection, for a new contentState

        // newEntity = Modifier.applyEntity(newEntity, selectionState, entityKey)

        // Add newEntity to the existing editorState, for a new editorState
        // const newEditorState = EditorState.push(
        //     this.state.editorState,
        //     newEntity,
        //     "apply-entity"
        // )

        // const newEditorState = EditorState.set(editorState, {
        //     currentContent: contentStateWithEntity
        // })

        // newEntity = RichUtils.toggleLink(editorState, selectionState, entityKey)
        // newEntity = RichUtils.t

        this.setState({
            editorState: RichUtils.toggleLink(
                newEditorState,
                editorState.getSelection(),
                entityKey
            )
        })

        // this.onChange(newEntity)
    }

    addCodeBlock = () => {
        const editorState = this.state.editorState
        const contentstate = editorState.getCurrentContent()

        // Returns ContentState record updated to include the newly created DraftEntity record in it's EntityMap.
        let newContentState = contentstate.createEntity("CODE_BLOCK", "MUTABLE")

        // Call getLastCreatedEntityKey to get the key of the newly created DraftEntity record.
        const entityKey = contentstate.getLastCreatedEntityKey()

        // Get the current selection
        const selectionState = this.state.editorState.getSelection()

        // console.log(convertToRaw(selectionState))

        // TODO: merge block text to one block

        var blockDelimiter = "\n"
        var startKey = selectionState.getStartKey()
        var endKey = selectionState.getEndKey()
        var blocks = contentstate.getBlockMap()

        var lastWasEnd = false
        var selectedBlock = blocks
            .skipUntil(function(block) {
                return block.getKey() === startKey
            })
            .takeUntil(function(block) {
                var result = lastWasEnd

                if (block.getKey() === endKey) {
                    lastWasEnd = true
                }

                return result
            })

        var finalText = selectedBlock
            .map(function(block) {
                var key = block.getKey()
                var text = block.getText()

                var start = 0
                var end = text.length

                if (key === startKey) {
                    start = selectionState.getStartOffset()
                }
                if (key === endKey) {
                    end = selectionState.getEndOffset()
                }

                text = text.slice(start, end)
                return text
            })
            .join(blockDelimiter)

        // const updatedBlock = Modifier.insertText(contentstate, selectionState., finalText, null, entityKey)
        // const newEditorState = EditorState.push(
        //     this.state.editorState,
        //     updatedBlock,
        //     "insert-text"
        // )

        //     // update first block with text from all blocks and remove text from rest of the blocks
        //     var updatedBlocks = blocks
        //     .skipUntil(function(block) {
        //         console.log(block.set("text", finalText))
        //         return block.getKey() === startKey
        //     })
        //     .takeWhile(function(block) {
        //         var result = lastWasEnd

        //         if (block.getKey() === endKey) {
        //             lastWasEnd = true
        //         }

        //         block.remove(block.getKey())

        //         return result
        //     })

        //     console.log(updatedBlocks)

        /* TODO:.......................... */

        // Add the created entity to the current selection, for a new contentState
        // FIXME: UNCOMMENT THIS LINE
        newContentState = Modifier.applyEntity(newContentState, selectionState, entityKey)

        // Add newContentState to the existing editorState, for a new editorState
        const newEditorState = EditorState.push(
            this.state.editorState,
            newContentState,
            "apply-entity"
        )

        this.onChange(newEditorState)
    }

    urlSubmit = () => {
        this.setState({
            showUrlInput: false
        })

        //this is to prifix the link with http://
        let HTTP_REGEX = /http:\/\//
        let test = HTTP_REGEX.exec(this.state.urlValue)
        // console.log(test)

        if (test === null) {
            let fullLink = "http://" + this.state.urlValue
            this.setState({ urlValue: fullLink }, () => {
                this.addLinkToSelection()
            })
        }
    }

    addHeader = headerLevel => {
        this.onChange(RichUtils.toggleBlockType(this.state.editorState, headerLevel))
        this.setState({
            editorPlaceHolder: !this.state.editorPlaceHolder,
            showHeaderLevels: false
        })
    }

    myBlockStyleFn = block => {
        let type = block.getType()
        // console.log(type)
        switch (type) {
            case "blockquote":
                return "editor-text-blockquote"
            // return "RichEditor-blockquote"
            case "code-block":
                return "editor-text-codeblock"
            default:
                return null
        }
    }

    onImageButtonClick = e => {
        this.input.value = null
        this.input.click()
    }

    onFileInputChange = e => {
        // console.log(e.target.files[0])

        let reader = new FileReader()

        reader.onloadend = function() {
            // var base64 = getBase64Image(reader.result)
            // console.log(reader.result)

            // get current content
            const editorState = this.state.editorState
            const contentstate = editorState.getCurrentContent()

            // create the entity to insert link
            let contentStateWithEntity = contentstate.createEntity("IMAGE", "IMMUTABLE", {
                url: reader.result
            })

            // Call getLastCreatedEntityKey to get the key of the newly created entity
            const entityKey = contentStateWithEntity.getLastCreatedEntityKey()

            // Add newContentState to the existing editorState, for a new editorState
            const newEditorState = EditorState.set(editorState, {
                currentContent: contentStateWithEntity
            })

            const change = AtomicBlockUtils.insertAtomicBlock(
                newEditorState,
                entityKey,
                " "
            )

            this.onChange(change)
        }.bind(this)

        reader.readAsDataURL(e.target.files[0])
    }

    // getOrientation = (file, callback) => {
    //     var reader = new FileReader()
    //     reader.onload = function(e) {
    //         var view = new DataView(e.target.result)
    //         if (view.getUint16(0, false) != 0xffd8) {
    //             return callback(-2, file)
    //         }
    //         var length = view.byteLength,
    //             offset = 2
    //         while (offset < length) {
    //             if (view.getUint16(offset + 2, false) <= 8) return callback(-1, file)
    //             var marker = view.getUint16(offset, false)
    //             offset += 2
    //             if (marker == 0xffe1) {
    //                 if (view.getUint32((offset += 2), false) != 0x45786966) {
    //                     return callback(-1, file)
    //                 }

    //                 var little = view.getUint16((offset += 6), false) == 0x4949
    //                 offset += view.getUint32(offset + 4, little)
    //                 var tags = view.getUint16(offset, little)
    //                 offset += 2
    //                 for (var i = 0; i < tags; i++) {
    //                     if (view.getUint16(offset + i * 12, little) == 0x0112) {
    //                         return callback(view.getUint16(offset + i * 12 + 8, little), file)
    //                     }
    //                 }
    //             } else if ((marker & 0xff00) != 0xff00) {
    //                 break
    //             } else {
    //                 offset += view.getUint16(offset, false)
    //             }
    //         }
    //         return callback(-1, file)
    //     }
    //     reader.readAsArrayBuffer(file)
    // }

    render() {
        const raw = convertToRaw(this.state.editorState.getCurrentContent())
        let className = "editor-typingbody-parent"

        return (
            <div>
                <div className="editor-parent">
                    <div className="editor-buttons-parent">
                        <IconButton onClick={() => this.styleButtonClick("BOLD")}>
                            <FormatBold />
                        </IconButton>
                        <IconButton onClick={() => this.styleButtonClick("ITALIC")}>
                            <FormatItalic />
                        </IconButton>
                        <IconButton onClick={() => this.styleButtonClick("UNDERLINE")}>
                            <FormatUnderlined />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                this.setState({ showUrlInput: !this.state.showUrlInput })
                            }}
                        >
                            <Link />
                        </IconButton>
                        <IconButton
                            onClick={() => {
                                this.setState({
                                    showHeaderLevels: !this.state.showHeaderLevels
                                })
                            }}
                        >
                            <b>H</b>
                        </IconButton>
                        <IconButton onClick={() => this.addHeader("unordered-list-item")}>
                            <FormatListBulleted />
                        </IconButton>
                        <IconButton onClick={() => this.addHeader("ordered-list-item")}>
                            <FormatListNumbered />
                        </IconButton>
                        <IconButton onClick={() => this.addHeader("blockquote")}>
                            <FormatQuote />
                        </IconButton>
                        <IconButton
                            // onClick={() => this.addHeader("code-block")}
                            onClick={() => this.addCodeBlock()}
                        >
                            <Code />
                        </IconButton>
                        <IconButton onClick={() => this.onImageButtonClick()}>
                            <Image />
                            <input
                                type="file"
                                accept="image/*"
                                ref={c => {
                                    this.input = c
                                }}
                                onChange={this.onFileInputChange}
                                style={{ display: "none" }}
                            />
                        </IconButton>
                    </div>

                    {/* for adding links to selection text */}

                    {this.state.showUrlInput && (
                        <div className="url-input-parent">
                            <TextField
                                label="Type URL"
                                value={this.state.urlValue}
                                onChange={e => {
                                    this.setState({ urlValue: e.target.value })
                                }}
                                margin="normal"
                            />
                            <Button
                                // variant="contained"
                                size="small"
                                color="secondary"
                                // onClick={() => {
                                //     this.setState({
                                //         showUrlInput: false
                                //     })
                                //     this.addLinkToSelection()
                                // }}
                                onClick={this.urlSubmit}
                            >
                                Submit URL
                            </Button>
                        </div>
                    )}

                    {/* for showing header levels */}
                    {this.state.showHeaderLevels && (
                        <div className="url-input-parent">
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-one")}
                            >
                                H1
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-two")}
                            >
                                H2
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-three")}
                            >
                                H3
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-four")}
                            >
                                H4
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-five")}
                            >
                                H5
                            </Button>
                            <Button
                                color="primary"
                                onClick={() => this.addHeader("header-six")}
                            >
                                H6
                            </Button>
                        </div>
                    )}

                    <div className={className} onClick={this.focus}>
                        <Editor
                            editorState={this.state.editorState}
                            handleKeyCommand={this.handleKeyCommand}
                            onChange={this.onChange}
                            onTab={this.onTab}
                            ref="editor"
                            blockStyleFn={this.myBlockStyleFn}
                            placeholder={
                                this.state.editorPlaceHolder ? "write here..." : ""
                            }
                            keyBindingFn={this.myKeyBindingFn}
                            handleReturn={this.handleReturn}

                            // blockStyleFn={getBlockStyle}
                            // spellCheck={true}
                        />
                    </div>
                    {/* <div>{JSON.stringify(raw, null, 4)}</div> */}
                </div>
            </div>
        )
    }
}

// function getBlockStyle(block) {
//     switch (block.getType()) {
//         case "blockquote":
//             return "RichEditor-blockquote"
//         default:
//             return null
//     }
// }

const HANDLE_REGEX = /\@[\w]+/g
const HASHTAG_REGEX = /\#[\w\u0590-\u05ff]+/g

// function handleStrategy(contentBlock, callback, contentState) {
//     findWithRegex(HANDLE_REGEX, contentBlock, callback)
// }

// function hashtagStrategy(contentBlock, callback, contentState) {
//     findWithRegex(HASHTAG_REGEX, contentBlock, callback)
// }

function findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText()
    // console.log(regex.exec(text))
    let matchArr, start
    while ((matchArr = regex.exec(text)) !== null) {
        start = matchArr.index
        callback(start, start + matchArr[0].length)
    }
}

const HandleSpan = props => {
    return (
        <span style={styles.handle} data-offset-key={props.offsetKey}>
            {props.children}
        </span>
    )
}

const HashtagSpan = props => {
    return (
        <span style={styles.hashtag} data-offset-key={props.offsetKey}>
            {props.children}
        </span>
    )
}

function getEntityStrategy(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(character => {
        const entityKey = character.getEntity()
        if (entityKey === null) {
            return false
        }
        return (
            contentState.getEntity(entityKey).getMutability() === "MUTABLE" &&
            contentState.getEntity(entityKey).getType() === "LINK"
        )
    }, callback)
}

function codeStrategy(contentBlock, callback, contentState) {
    // console.log("running")

    contentBlock.findEntityRanges(character => {
        // console.log("running")
        const entityKey = character.getEntity()
        if (entityKey === null) {
            return false
        }
        return (
            contentState.getEntity(entityKey).getType() === "CODE_BLOCK" &&
            contentState.getEntity(entityKey).getMutability() === "MUTABLE"
        )
    }, callback)
}

const CodeBlock = props => {
    // console.log("CodeBlock component running")
    // const res = props.contentState.getEntity(props.entityKey)
    // console.log(res)
    return (
        <div style={{ backgroundColor: "#F6F8FA", padding: "20px" }}>
            <code>{props.children}</code>
        </div>

        // <code style={{ backgroundColor: "#F6F8FA" }}>
        //     {props.children}
        // </code>
    )
}

const LinkText = props => {
    console.log("LinkText component running")
    const { url } = props.contentState.getEntity(props.entityKey).getData()
    // console.log(url)
    return (
        // <div style={{ backgroundColor: "red" }}>{props.children}</div>

        <a href={url} target="_blank">
            {props.children}
        </a>
    )
}

function imageStrategy(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges(character => {
        // console.log("running")
        const entityKey = character.getEntity()
        if (entityKey === null) {
            return false
        }
        return (
            contentState.getEntity(entityKey).getType() === "IMAGE" &&
            contentState.getEntity(entityKey).getMutability() === "IMMUTABLE"
        )
    }, callback)
}

const ImageBlock = props => {
    const { url } = props.contentState.getEntity(props.entityKey).getData()
    // console.log(url)
    return (
        // <div style={{ backgroundColor: "red" }}>{props.children}</div>
        <div id="editor-image-parent">
            <img src={url} id="image-tag" />
        </div>
    )
}

const styles = {
    handle: {
        color: "rgba(98, 177, 254, 1.0)",
        direction: "ltr",
        unicodeBidi: "bidi-override"
    },
    hashtag: {
        color: "rgba(95, 184, 138, 1.0)"
    },
    mutable: {
        // backgroundColor: "rgba(204, 204, 255, 1.0)",
        padding: "2px 0",
        textDecoration: "underline",
        color: "blue"
    }
}

export default DraftJsEditor