var element = arguments[0];
if(element) {
	// if we have hover element present on the page then we do scrollIntoViewIfNeeded
	var hoverXpath = "//div[contains(@class, 'forceHoverPanel') and contains(@class, 'open') and contains(@class, 'active')]//div[contains(@class, 'listPreview')]";
	var hoverElem = document.evaluate(hoverXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
	
	if (hoverElem && hoverElem.singleNodeValue) {
		var hoverElement = document.evaluate("//div[contains(@class, 'forceHoverPanel') and contains(@class, 'open') and contains(@class, 'active')]//div[contains(@class, 'forceRelatedListHover')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		if(element === hoverElement){
			var hoverPanelElem= document.evaluate("//div[contains(@class, 'forceHoverPanel') and contains(@class, 'open') and contains(@class, 'active')]//h2[contains(@class, 'slds-page-header')]//a[contains(@class, 'test-drillin')]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			if(hoverPanelElem){
				element = hoverPanelElem
			}
			element.scrollIntoViewIfNeeded(true);
		}
		return true;
	}
	
	return false;
}
