sap.ui.define(
    [],
    () => {
        'use strict'

        sap.ui.controller(
            'oup.ptp.zptpadvcopy.ext.controller.ListReportExt',
            {
                onAfterRendering: function () {
                    // hide delete button on list report page
                    this._hideDeleteButton();
                },

                /***********************************************************************/
                /*                          INTERNAL METHODS                           */
                /***********************************************************************/

                _hideDeleteButton: function () {
                    try {
                        const sId = "oup.ptp.zptpadvcopy::sap.suite.ui.generic.template.ListReport.view.ListReport::ZPTP_C_ADV_COPY--deleteEntry";
                        sap.ui.getCore().byId(sId).setVisible(false);
                    } catch (error) {
                        // unable to hide the delete button entry
                    }
                }
            }
        )
    });