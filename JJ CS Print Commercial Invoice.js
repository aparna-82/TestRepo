/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['N/currentRecord', 'N/url','N/record'],
    /**
     * @param{currentRecord} currentRecord
     * @param{url} url
     */
    function(currentRecord, url,record) {

        /**
         * Function to be executed after page is initialized.
         *
         * @param {Object} scriptContext
         * @param {Record} scriptContext.currentRecord - Current form record
         * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
         *
         * @since 2015.2
         */
        function pageInit(scriptContext) {

        }
        function commercialInvoice() {
            var rec = currentRecord.get().id;
            var objRecord = record.load({
                type: record.Type.SALES_ORDER,
                id: rec,
                isDynamic: true,
            });
            var order = objRecord.getValue({fieldId : 'tranid'});
            console.log("order",order);
            window.open("/app/site/hosting/scriptlet.nl?script=3339&deploy=1" + "&recId=" + currentRecord.get().id + "&order=" + order);
        }

        return {
            pageInit: pageInit,
            commercialInvoice: commercialInvoice,
        };

    });
