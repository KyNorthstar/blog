


/// A singleton which manages all content switchers
///
/// Use this to connect new content switchers to the current document.
/// See the documentation for ``ContentSwitcher`` for how to use a content switcher
class ContentSwitchers {

    static #contentSwitchers = {};


    static connectNewContentSwitcher(selector/*: String */) {
        this.#contentSwitchers[selector] = new ContentSwitcher(selector)
        this.#runContentSwitchers()
    }


    static #runContentSwitchers() {
        for (const contentSwitcher of Object.values(this.#contentSwitchers)) {
            contentSwitcher._connectAndRun()
        }
    }
}



/// A content switcher allows you to define collections of similar items where one item at a time is displayed and the rest are hidden.
///
/// Here's what the HTML might look like:
/// ```html
///
/// ```
class ContentSwitcher {
    
    #selectorForAllElementsWithContentToBeSwitched/*: String */
    
    
    constructor(selectorForAllElementsWithContentToBeSwitched/*: String */) {
        this.#selectorForAllElementsWithContentToBeSwitched = selectorForAllElementsWithContentToBeSwitched
    }
    
    
    _connectAndRun() {
        const contentSwitcherSelectorUi = $(`[data-switched-element-selector="${this.#selectorForAllElementsWithContentToBeSwitched}"]`)
        if (contentSwitcherSelectorUi.length < 1) { return }

        const contentSwitcherDataSourceDataKey = contentSwitcherSelectorUi.data("content-switcher-data-source")
        const contentSwitcherDataReplacementDataKey = contentSwitcherSelectorUi.data("content-switcher-data-replacement")
        if (typeof(contentSwitcherDataSourceDataKey) !== 'string'
        || typeof(contentSwitcherDataReplacementDataKey) !== 'string') {
            return
        }
        const contentSwitcherDataReplacementSelector = `[data-${contentSwitcherDataReplacementDataKey}]`
        if (typeof(contentSwitcherDataReplacementSelector) !== 'string') { return }

        this.#connectButtons(contentSwitcherDataSourceDataKey,
                       contentSwitcherDataReplacementSelector,
                       contentSwitcherDataReplacementDataKey)

        this.#run(contentSwitcherDataSourceDataKey,
            contentSwitcherDataReplacementSelector,
            contentSwitcherDataReplacementDataKey)
    }
    
    
    #connectButtons(contentSwitcherDataSourceDataKey/*: String*/,
                    contentSwitcherDataReplacementSelector/*: String*/,
                    contentSwitcherDataReplacementDataKey/*: String*/) {
        $(contentSwitcherDataReplacementSelector).click((element) => {
            const currentTarget = element.currentTarget
            if (!currentTarget) { return }
            this.#clearSelection(contentSwitcherDataReplacementSelector)
            this.#select(currentTarget)
            this.#run(contentSwitcherDataSourceDataKey,
                contentSwitcherDataReplacementSelector,
                contentSwitcherDataReplacementDataKey)
        })
    }
    
    
    #clearSelection(contentSwitcherDataReplacementSelector/*: String*/) {
        $(contentSwitcherDataReplacementSelector).attr("selected", null)
    }


    #select(element/*: Element*/) {
        $(element).attr("selected", true)
    }


    #run(contentSwitcherDataSourceDataKey/*: String*/,
         contentSwitcherDataReplacementSelector/*: String*/,
         contentSwitcherDataReplacementDataKey/*: String*/) {
        const userSelectedContentReplacement = $(`${contentSwitcherDataReplacementSelector}[selected]`)
        if (userSelectedContentReplacement.length != 1) { return console.error(`Only 1 selector should be selected, but there were ${userSelectedContentReplacement.length}`) }

        const userSelectedContentType = userSelectedContentReplacement.data(contentSwitcherDataReplacementDataKey)
        if (typeof(userSelectedContentType) != 'string') { return }

        const elementsWithContentToBeSwitched = $(this.#selectorForAllElementsWithContentToBeSwitched)
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



document.addContentSwitcher = (selector/*: String */) => {
    ContentSwitchers.connectNewContentSwitcher(selector)
}
