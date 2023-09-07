//Run at the end of the DOM. 
replacePaginationArrows();

/**
 * Replace existing pagination arrows with JS to match Dealer Portal mockup.
 * Using JS because pagination arrows seem to be hard-coded on server-side.
 */
function replacePaginationArrows() {
    //Check for pagination. Run loop if pagination exists.
    $('.pagination li').length > 0 && $('.pagination li').each(function () {
        //Get inner text of button 
        const buttonContent = $(this).text(); 
        //Check if arrow button is disabled or not 
        const arrowIsLight = $(this).hasClass('disabled');

        /**
         * Set the pagination arrow of a pagination button. 
         * @param {string} className - Class to be added to pagination arrow.
         */
        const setArrow = (className) => {
            $(this).addClass(className); 
        }

        //Replace arrow based on current arrow unicode. 
        //Remove each arrow button's inner text. Set a class name to give that button an arrrow from a CSS class URL.
        switch (buttonContent) {
            case '«':
                //Check if arrow is light or dark (disabled/clickable)
                arrowIsLight ?
                    setArrow('dp-pagination__double-arrow-left-light')
                    : setArrow('dp-pagination__double-arrow-left-dark');
                //Wipe inner text to remove original arrow. 
                $(this).find('a')[0].innerText = ''; 
                break;
            case '<':
                arrowIsLight ?
                    setArrow('dp-pagination__single-arrow-left-light')
                    : setArrow('dp-pagination__single-arrow-left-dark');
                $(this).find('a')[0].innerText = '';
                break;
            case '>':
                arrowIsLight ?
                    setArrow('dp-pagination__single-arrow-right-light')
                    : setArrow('dp-pagination__single-arrow-right-dark');
                $(this).find('a')[0].innerText = '';
                break;
            case '»':
                arrowIsLight ?
                    setArrow('dp-pagination__double-arrow-right-light')
                    : setArrow('dp-pagination__double-arrow-right-dark');
                $(this).find('a')[0].innerText = '';
                break; 
            default:
            return;
        }
    })
}
