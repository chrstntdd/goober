const GOOBER_ID = '_goober';
const ssr = {
    data: ''
};

/**
 * Returns the _commit_ target
 * @param {Object} [target]
 * @returns {HTMLStyleElement|{data: ''}}
 */
export const getSheet = target => {
    try {
        let sheet = target ? target.querySelector('#' + GOOBER_ID) : self[GOOBER_ID];
        if (!sheet) {
            // Note to self: head.innerHTML +=, triggers a layout/reflow. Avoid it.
            sheet = (target || document.head).appendChild(document.createElement('style'));
            sheet.innerHTML = ' ';
            sheet.id = GOOBER_ID;
        }
        return sheet.firstChild;
    } catch (e) {}
    return ssr;
};
