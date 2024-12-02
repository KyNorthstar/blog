


class ContentSwitchers {

    static _contentSwitchers = {};


    constructor() {
    }


    static connectNewContentSwitcher(selector/*: String */, switcher/*: ContentSwitcher */) {
        this._contentSwitchers[selector] = new ContentSwitcher(selector, switcher)
        this._runContentSwitchers()
    }


    static _runContentSwitchers() {
        for (const contentSwitcher of Object.values(this._contentSwitchers)) {
            contentSwitcher._connectAndRun()
        }
    }
}



class ContentSwitcher {
    
    selectorForAllElementsWithContentToBeSwitched/*: String */
    switcher/*: function */
    
    
    constructor(selectorForAllElementsWithContentToBeSwitched/*: String */, switcher/*: function */) {
        this.selectorForAllElementsWithContentToBeSwitched = selectorForAllElementsWithContentToBeSwitched
        this.switcher = switcher
    }
    
    
    _connectAndRun() {
        const contentSwitcherSelectorUi = $(`[data-switched-element-selector="${this.selectorForAllElementsWithContentToBeSwitched}"]`)
        if (contentSwitcherSelectorUi.length < 1) { return }

        const contentSwitcherDataSourceDataKey = contentSwitcherSelectorUi.data("content-switcher-data-source")
        const contentSwitcherDataReplacementDataKey = contentSwitcherSelectorUi.data("content-switcher-data-replacement")
        if (typeof(contentSwitcherDataSourceDataKey) !== 'string'
        || typeof(contentSwitcherDataReplacementDataKey) !== 'string') {
            return
        }
        const contentSwitcherDataReplacementSelector = `[data-${contentSwitcherDataReplacementDataKey}]`
        if (typeof(contentSwitcherDataReplacementSelector) !== 'string') { return }

        this._connectButtons(contentSwitcherDataSourceDataKey,
                       contentSwitcherDataReplacementSelector,
                       contentSwitcherDataReplacementDataKey)

        this._run(contentSwitcherDataSourceDataKey,
            contentSwitcherDataReplacementSelector,
            contentSwitcherDataReplacementDataKey)
    }
    
    
    _connectButtons(contentSwitcherDataSourceDataKey/*: String*/,
                    contentSwitcherDataReplacementSelector/*: String*/,
                    contentSwitcherDataReplacementDataKey/*: String*/) {
        $(contentSwitcherDataReplacementSelector).click((element) => {
            const currentTarget = element.currentTarget
            if (!currentTarget) { return }
            this._clearSelection(contentSwitcherDataReplacementSelector)
            this._select(currentTarget)
            this._run(contentSwitcherDataSourceDataKey,
                contentSwitcherDataReplacementSelector,
                contentSwitcherDataReplacementDataKey)
        })
    }
    
    
    _clearSelection(contentSwitcherDataReplacementSelector/*: String*/) {
        $(contentSwitcherDataReplacementSelector).attr("selected", null)
    }


    _select(element/*: Element*/) {
        $(element).attr("selected", true)
    }


    _run(contentSwitcherDataSourceDataKey/*: String*/,
         contentSwitcherDataReplacementSelector/*: String*/,
         contentSwitcherDataReplacementDataKey/*: String*/) {
        const userSelectedContentReplacement = $(`${contentSwitcherDataReplacementSelector}[selected]`)
        if (userSelectedContentReplacement.length != 1) { return console.error(`Only 1 selector should be selected, but there were ${userSelectedContentReplacement.length}`) }

        const userSelectedContentType = userSelectedContentReplacement.data(contentSwitcherDataReplacementDataKey)
        if (typeof(userSelectedContentType) != 'string') { return }

        const elementsWithContentToBeSwitched = $(this.selectorForAllElementsWithContentToBeSwitched)
        elementsWithContentToBeSwitched.attr("hidden", "")
        elementsWithContentToBeSwitched.each((_, rawElement) => {
            const element = $(rawElement)
            const thisElementContentType = element.data(contentSwitcherDataSourceDataKey)
            if (typeof(thisElementContentType) != 'string') { return }
            if (thisElementContentType == userSelectedContentType) {
                element.attr("hidden", null)
            }
        })
    }
}



document.addContentSwitcher = (selector/*: String */, switcher/*: ContentSwitcher */) => {
    ContentSwitchers.connectNewContentSwitcher(selector, switcher)
}
