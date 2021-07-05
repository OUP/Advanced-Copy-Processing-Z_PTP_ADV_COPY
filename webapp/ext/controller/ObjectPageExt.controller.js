sap.ui.define([],
    () => {
        'use strict'

        sap.ui.controller(
            'oup.ptp.zptpadvcopy.ext.controller.ObjectPageExt',
            {
                onInit: function () {
                    const fnOnPageDataLoaded = (_oBindingContext) => {
                        // start busy indicator
                        sap.ui.core.BusyIndicator.show(0);

                        // hide header level delete button
                        this._hideHeaderDeleteButton();

                        // hide the advance recepit details section delete button
                        if (this.getView().getModel('ui').getProperty('/editable')) {
                            setTimeout(() => this._hideAdvanceRecepitDetailDeleteButton(), 250);
                        }

                        // end busy indicator
                        sap.ui.core.BusyIndicator.hide();
                    };

                    this.extensionAPI.attachPageDataLoaded(fnOnPageDataLoaded);
                },

                onAfterRendering: function () {
                    // hide header delete button on object page
                    this._hideHeaderDeleteButton();
                },

                /***********************************************************************/
                /*                          INTERNAL METHODS                           */
                /***********************************************************************/

                _hideHeaderDeleteButton: function () {
                    try {
                        const sId = "oup.ptp.zptpadvcopy::sap.suite.ui.generic.template.ObjectPage.view.Details::ZPTP_C_ADV_COPY--delete";
                        sap.ui.getCore().byId(sId).setVisible(false);
                    } catch (error) {
                        // unable to hide the delete button entry
                    }
                },

                _hideAdvanceRecepitDetailDeleteButton: function () {
                    try {
                        const sId = "oup.ptp.zptpadvcopy::sap.suite.ui.generic.template.ObjectPage.view.Details::ZPTP_C_ADV_COPY--to_grat::com.sap.vocabularies.UI.v1.LineItem::deleteEntry";
                        const oDom = sap.ui.getCore().byId(sId).$();

                        // hide through dom
                        oDom[0].style.display = 'none';
                    } catch (error) {
                        // unable to hide the delete button entry
                    }
                }
            }
        )
    });