import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import notes from './README.md';

export default {
  title: 'Components/Popover in a scrollable element',
  decorators: [withNotes, withCode],
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedPopover = `<style>
  .wrapper1, .wrapper2 {
    width: 100%;
    border: none 0px RED;
    overflow-x: auto;
    overflow-y: hidden;
} </style>
<div class="ecl-container">
<div class="padding-containert">
  <div class="wrapper1">
    <div class="div1" style="width: 1947.06px;">
    </div>
  </div>
  <div class="wrapper2">
    <div class="div2" style="width: 1947.06px;">
      <table id="data-table-report" data-ecl-auto-init="Table" data-ecl-table="" class="ecl-table ecl-table--zebra" style="display: table;">
        <thead class="ecl-table__head">
          <tr class="ecl-table__row">
            <!--         <div class="table-container">
              <table class="table table-striped table-hover table-responsive" id="data-table-reports">
                  <thead>
                      <tr class="ReportHeader"> -->
            <th class="ecl-table__header empty">
              <div class="placeholder"></div>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header rownr empty">
              #
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header SI5">
              Test/specimen identifier
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header RN1 smaller">
              Nr. Curve points
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header RN2">
              Nr. Microstructures and Documents
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header MN4">
              Material name
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header DOI_DATE">
              DOI produced on
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header BH4">
              Melt/batch/heat identifier
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header SPN3">
              Specimen name (full)
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header PF4">
              Product form
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header EN2">
              Test: Environment
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header DURATION">
              Duration of  experiment (h)
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header MACH5">
              Test machine
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header TS5">
              Test standard
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
            <th data-ecl-table-sort-toggle="" class="ecl-table__header TT5">
              Temperature (°C)
              <button class="ecl-table__arrow" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-up">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" focusable="false" aria-hidden="true" class="ecl-table__icon ecl-icon ecl-icon--xs ecl-table__icon-down">
                  <path fill-rule="evenodd" d="m12 33 12-15 12 15z"></path>
                </svg>
              </button>
            </th>
          </tr>
        </thead>
        <tbody class="ecl-table__body">
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="0">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860125&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860125">
            </td>
            <td class="ecl-table__cell "><span>1</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 1, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-1-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">04120</span>
                </a>
                <div id="popover-example-486-1-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
Nullam nec consectetur justo, ac pharetra eros. Maecenas fringilla odio sed nulla imperdiet, id hendrerit augue malesuada. Curabitur luctus ac nunc sit amet suscipit. Suspendisse placerat leo vel sem dignissim, eu commodo lectus finibus. Cras faucibus libero quis vestibulum pellentesque. Nullam in quam ac metus ullamcorper semper. Suspendisse faucibus mi nec dolor vehicula dignissim. Etiam et sapien quis augue malesuada dictum. Quisque nec metus id nisi dignissim molestie eget vel est. Nulla congue facilisis diam, et eleifend est ullamcorper vel. Sed tincidunt lacus tristique mi imperdiet, id fringilla massa dictum. Vivamus nisl erat, sagittis et odio congue, tristique tincidunt massa. Fusce ornare metus rutrum ullamcorper porta. Praesent ut neque ut mi ornare luctus vitae vitae libero. Quisque a arcu eu orci aliquet pharetra
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640001, 1, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-1-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640001-1-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nibh eu tellus mollis laoreet vitae sit amet lacus. Quisque ac neque magna. Suspendisse consequat sed arcu id consequat. Nullam ut risus venenatis, rhoncus lectus in, fermentum nulla. Duis mauris justo, ornare vitae interdum sed, porttitor ut enim. Donec quis libero nisl. Sed porttitor diam est, hendrerit facilisis sapien lacinia in.
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860125" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR021</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640001, 1, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-1-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">welded plate</span>
                </a>
                <div id="popover-example-48640001-1-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620012, 1, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620012-1-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620012-1-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1029</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="1">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840040&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840040">
            </td>
            <td class="ecl-table__cell "><span>2</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 2, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-2-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_SAW_2</span>
                </a>
                <div id="popover-example-484-2-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover">
                <a onclick="getRN4New(48440010, 2, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-2-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316LTRELRTDGSDGSdg</span>
                </a>
                <div id="popover-example-48440010-2-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440010, 2, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-2-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440010-2-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 2, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-2-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-2-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="2">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860108&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860108">
            </td>
            <td class="ecl-table__cell "><span>3</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 3, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-3-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">28119</span>
                </a>
                <div id="popover-example-486-3-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 3, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-3-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-3-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860108" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 3, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-3-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-3-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620003, 3, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620003-3-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620003-3-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1007</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="3">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860118&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860118">
            </td>
            <td class="ecl-table__cell "><span>4</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 4, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-4-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">12919</span>
                </a>
                <div id="popover-example-486-4-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640010, 4, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-4-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640010-4-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860118" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640010, 4, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-4-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640010-4-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620009, 4, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620009-4-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620009-4-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1005</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="4">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840028&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840028">
            </td>
            <td class="ecl-table__cell "><span>5</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 5, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-5-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_TIG_2</span>
                </a>
                <div id="popover-example-484-5-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440008, 5, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-5-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440008-5-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440008, 5, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-5-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440008-5-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 5, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-5-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-5-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="5">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840030&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840030">
            </td>
            <td class="ecl-table__cell "><span>6</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 6, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-6-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_TIG_4</span>
                </a>
                <div id="popover-example-484-6-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440008, 6, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-6-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440008-6-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440008, 6, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-6-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440008-6-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 6, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-6-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-6-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="6">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860110&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860110">
            </td>
            <td class="ecl-table__cell "><span>7</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 7, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-7-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">27219</span>
                </a>
                <div id="popover-example-486-7-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 7, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-7-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-7-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860110" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 7, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-7-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-7-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620004, 7, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620004-7-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620004-7-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2013</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="7">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860114&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860114">
            </td>
            <td class="ecl-table__cell "><span>8</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 8, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-8-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">27719</span>
                </a>
                <div id="popover-example-486-8-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 8, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-8-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-8-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860114" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 8, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-8-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-8-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620005, 8, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620005-8-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620005-8-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5010</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="8">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860115&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860115">
            </td>
            <td class="ecl-table__cell "><span>9</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 9, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-9-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">30119</span>
                </a>
                <div id="popover-example-486-9-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
Nullam nec consectetur justo, ac pharetra eros. Maecenas fringilla odio sed nulla imperdiet, id hendrerit augue malesuada. Curabitur luctus ac nunc sit amet suscipit. Suspendisse placerat leo vel sem dignissim, eu commodo lectus finibus. Cras faucibus libero quis vestibulum pellentesque. Nullam in quam ac metus ullamcorper semper. Suspendisse faucibus mi nec dolor vehicula dignissim. Etiam et sapien quis augue malesuada dictum. Quisque nec metus id nisi dignissim molestie eget vel est. Nulla congue facilisis diam, et eleifend est ullamcorper vel. Sed tincidunt lacus tristique mi imperdiet, id fringilla massa dictum. Vivamus nisl erat, sagittis et odio congue, tristique tincidunt massa. Fusce ornare metus rutrum ullamcorper porta. Praesent ut neque ut mi ornare luctus vitae vitae libero. Quisque a arcu eu orci aliquet pharetra
  
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640008, 9, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-9-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640008-9-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860115" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640008, 9, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-9-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640008-9-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620006, 9, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620006-9-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620006-9-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1002</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="9">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840031&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840031">
            </td>
            <td class="ecl-table__cell "><span>10</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover">
                <a onclick="getRN1New(484, 10, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-10-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15Ti_1</span>
                </a>
                <div id="popover-example-484-10-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
Nullam nec consectetur justo, ac pharetra eros. Maecenas fringilla odio sed nulla imperdiet, id hendrerit augue malesuada. Curabitur luctus ac nunc sit amet suscipit. Suspendisse placerat leo vel sem dignissim, eu commodo lectus finibus. Cras faucibus libero quis vestibulum pellentesque. Nullam in quam ac metus ullamcorper semper. Suspendisse faucibus mi nec dolor vehicula dignissim. Etiam et sapien quis augue malesuada dictum. Quisque nec metus id nisi dignissim molestie eget vel est. Nulla congue facilisis diam, et eleifend est ullamcorper vel. Sed tincidunt lacus tristique mi imperdiet, id fringilla massa dictum. Vivamus nisl erat, sagittis et odio congue, tristique tincidunt massa. Fusce ornare metus rutrum ullamcorper porta. Praesent ut neque ut mi ornare luctus vitae vitae libero. Quisque a arcu eu orci aliquet pharetra
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover">
                <a onclick="getRN4New(48440006, 10, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440006-10-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48440006-10-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
  Nullam nec consectetur justo, ac pharetra eros. Maecenas fringilla odio sed nulla imperdiet, id hendrerit augue malesuada. Curabitur luctus ac nunc sit amet suscipit. Suspendisse placerat leo vel sem dignissim, eu commodo lectus finibus. Cras faucibus libero quis vestibulum pellentesque. Nullam in quam ac metus ullamcorper semper. Suspendisse faucibus mi nec dolor vehicula dignissim. Etiam et sapien quis augue malesuada dictum. Quisque nec metus id nisi dignissim molestie eget vel est. Nulla congue facilisis diam, et eleifend est ullamcorper vel. Sed tincidunt lacus tristique mi imperdiet, id fringilla massa dictum. Vivamus nisl erat, sagittis et odio congue, tristique tincidunt massa. Fusce ornare metus rutrum ullamcorper porta. Praesent ut neque ut mi ornare luctus vitae vitae libero. Quisque a arcu eu orci aliquet pharetra
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>VR027</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440006, 10, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440006-10-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440006-10-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420001, 10, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420001-10-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">air</span>
                </a>
                <div id="popover-example-48420001-10-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="10">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860158&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860158">
            </td>
            <td class="ecl-table__cell "><span>11</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 11, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-11-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">24020</span>
                </a>
                <div id="popover-example-486-11-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nibh eu tellus mollis laoreet vitae sit amet lacus. Quisque ac neque magna. Suspendisse consequat sed arcu id consequat. Nullam ut risus venenatis, rhoncus lectus in, fermentum nulla. Duis mauris justo, ornare vitae interdum sed, porttitor ut enim. Donec quis libero nisl. Sed porttitor diam est, hendrerit facilisis sapien lacinia in.
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 11, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-11-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-11-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 11, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-11-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-11-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620016, 11, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620016-11-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620016-11-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5064</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="11">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860127&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860127">
            </td>
            <td class="ecl-table__cell "><span>12</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 12, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-12-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">04420</span>
                </a>
                <div id="popover-example-486-12-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640001, 12, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-12-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640001-12-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860127" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR021</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640001, 12, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-12-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">welded plate</span>
                </a>
                <div id="popover-example-48640001-12-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620013, 12, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620013-12-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620013-12-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5059</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="12">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840032&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840032">
            </td>
            <td class="ecl-table__cell "><span>13</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 13, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-13-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15Ti_2</span>
                </a>
                <div id="popover-example-484-13-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440006, 13, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440006-13-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48440006-13-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>VR027</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440006, 13, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440006-13-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440006-13-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420001, 13, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420001-13-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">air</span>
                </a>
                <div id="popover-example-48420001-13-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="13">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860109&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860109">
            </td>
            <td class="ecl-table__cell "><span>14</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 14, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-14-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">28319</span>
                </a>
                <div id="popover-example-486-14-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 14, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-14-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-14-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860109" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 14, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-14-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-14-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620003, 14, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620003-14-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620003-14-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1007</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="14">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860111&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860111">
            </td>
            <td class="ecl-table__cell "><span>15</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 15, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-15-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">27319</span>
                </a>
                <div id="popover-example-486-15-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 15, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-15-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-15-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860111" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 15, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-15-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-15-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620004, 15, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620004-15-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620004-15-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2013</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="15">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840033&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840033">
            </td>
            <td class="ecl-table__cell "><span>16</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 16, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-16-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_1</span>
                </a>
                <div id="popover-example-484-16-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440007, 16, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-16-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48440007-16-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440007, 16, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-16-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440007-16-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 16, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-16-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-16-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="16">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860162&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860162">
            </td>
            <td class="ecl-table__cell "><span>17</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 17, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-17-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">04021</span>
                </a>
                <div id="popover-example-486-17-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 17, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-17-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-17-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 17, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-17-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-17-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620018, 17, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620018-17-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620018-17-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>49</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="17">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860163&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860163">
            </td>
            <td class="ecl-table__cell "><span>18</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 18, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-18-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">24520</span>
                </a>
                <div id="popover-example-486-18-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 18, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-18-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-18-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 18, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-18-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-18-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620019, 18, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620019-18-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620019-18-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1009</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="18">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860161&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860161">
            </td>
            <td class="ecl-table__cell "><span>19</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 19, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-19-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">07920</span>
                </a>
                <div id="popover-example-486-19-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 19, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-19-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-19-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 19, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-19-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-19-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620017, 19, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620017-19-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620017-19-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5014</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="19">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860126&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860126">
            </td>
            <td class="ecl-table__cell "><span>20</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 20, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-20-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">04220</span>
                </a>
                <div id="popover-example-486-20-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640001, 20, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-20-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640001-20-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860126" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR021</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640001, 20, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-20-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">welded plate</span>
                </a>
                <div id="popover-example-48640001-20-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620012, 20, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620012-20-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620012-20-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1029</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="20">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860124&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860124">
            </td>
            <td class="ecl-table__cell "><span>21</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 21, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-21-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">00220</span>
                </a>
                <div id="popover-example-486-21-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640002, 21, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-21-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640002-21-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860124" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR023</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640002, 21, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-21-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640002-21-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620014, 21, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620014-21-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620014-21-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>10006</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="21">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840041&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840041">
            </td>
            <td class="ecl-table__cell "><span>22</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 22, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-22-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_SAW_3</span>
                </a>
                <div id="popover-example-484-22-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440010, 22, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-22-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440010-22-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440010, 22, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-22-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440010-22-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 22, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-22-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-22-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="22">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840042&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840042">
            </td>
            <td class="ecl-table__cell "><span>23</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 23, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-23-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_SAW_4</span>
                </a>
                <div id="popover-example-484-23-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440010, 23, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-23-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440010-23-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440010, 23, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-23-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440010-23-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 23, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-23-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-23-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="23">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860116&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860116">
            </td>
            <td class="ecl-table__cell "><span>24</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 24, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-24-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">28919</span>
                </a>
                <div id="popover-example-486-24-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640008, 24, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-24-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640008-24-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860116" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640008, 24, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-24-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640008-24-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620007, 24, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620007-24-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620007-24-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2008</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="24">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860117&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860117">
            </td>
            <td class="ecl-table__cell "><span>25</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 25, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-25-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">29219</span>
                </a>
                <div id="popover-example-486-25-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640008, 25, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-25-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640008-25-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860117" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640008, 25, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640008-25-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640008-25-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620008, 25, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620008-25-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620008-25-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5037</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="25">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840035&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840035">
            </td>
            <td class="ecl-table__cell "><span>26</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 26, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-26-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_3</span>
                </a>
                <div id="popover-example-484-26-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440007, 26, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-26-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48440007-26-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440007, 26, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-26-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440007-26-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 26, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-26-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-26-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="26">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860170&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860170">
            </td>
            <td class="ecl-table__cell "><span>27</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 27, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-27-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">08618</span>
                </a>
                <div id="popover-example-486-27-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640016, 27, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-27-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640016-27-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>56801</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640016, 27, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-27-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640016-27-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620023, 27, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620023-27-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620023-27-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1008</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="27">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860164&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860164">
            </td>
            <td class="ecl-table__cell "><span>28</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 28, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-28-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">24620</span>
                </a>
                <div id="popover-example-486-28-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 28, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-28-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-28-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 28, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-28-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-28-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620019, 28, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620019-28-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620019-28-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2499</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="28">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860165&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860165">
            </td>
            <td class="ecl-table__cell "><span>29</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 29, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-29-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">24820</span>
                </a>
                <div id="popover-example-486-29-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 29, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-29-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-29-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 29, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-29-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-29-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620019, 29, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620019-29-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620019-29-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5015</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="29">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860166&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860166">
            </td>
            <td class="ecl-table__cell "><span>30</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 30, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-30-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">03821</span>
                </a>
                <div id="popover-example-486-30-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 30, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-30-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-30-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 30, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-30-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-30-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620020, 30, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620020-30-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620020-30-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>49</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="30">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860168&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860168">
            </td>
            <td class="ecl-table__cell "><span>31</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 31, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-31-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">08720</span>
                </a>
                <div id="popover-example-486-31-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 31, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-31-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-31-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 31, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-31-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-31-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620022, 31, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620022-31-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620022-31-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5014</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="31">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860156&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860156">
            </td>
            <td class="ecl-table__cell "><span>32</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 32, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-32-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">23620</span>
                </a>
                <div id="popover-example-486-32-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 32, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-32-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-32-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 32, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-32-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-32-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620016, 32, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620016-32-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620016-32-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1010</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="32">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840027&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840027">
            </td>
            <td class="ecl-table__cell "><span>33</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 33, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-33-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_TIG_1</span>
                </a>
                <div id="popover-example-484-33-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440008, 33, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-33-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440008-33-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440008, 33, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-33-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440008-33-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 33, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-33-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-33-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="33">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840029&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840029">
            </td>
            <td class="ecl-table__cell "><span>34</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 34, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-34-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_TIG_3</span>
                </a>
                <div id="popover-example-484-34-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440008, 34, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-34-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440008-34-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>100841 (121584)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440008, 34, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440008-34-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440008-34-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 34, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-34-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-34-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="34">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860128&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860128">
            </td>
            <td class="ecl-table__cell "><span>35</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 35, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-35-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">03520</span>
                </a>
                <div id="popover-example-486-35-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640001, 35, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-35-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640001-35-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860128" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR021</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640001, 35, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640001-35-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">welded plate</span>
                </a>
                <div id="popover-example-48640001-35-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620015, 35, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620015-35-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620015-35-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>10103</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="35">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860157&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860157">
            </td>
            <td class="ecl-table__cell "><span>36</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 36, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-36-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">23920</span>
                </a>
                <div id="popover-example-486-36-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 36, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-36-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-36-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 36, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-36-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-36-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620016, 36, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620016-36-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620016-36-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2544</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>450</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="36">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860119&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860119">
            </td>
            <td class="ecl-table__cell "><span>37</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 37, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-37-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">12519</span>
                </a>
                <div id="popover-example-486-37-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640010, 37, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-37-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640010-37-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860119" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640010, 37, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-37-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640010-37-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620010, 37, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620010-37-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620010-37-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2010</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="37">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860121&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860121">
            </td>
            <td class="ecl-table__cell "><span>38</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 38, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-38-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">00720</span>
                </a>
                <div id="popover-example-486-38-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640002, 38, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-38-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640002-38-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860121" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR023</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640002, 38, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-38-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640002-38-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620012, 38, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620012-38-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620012-38-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1029</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="38">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860122&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860122">
            </td>
            <td class="ecl-table__cell "><span>39</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 39, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-39-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">00820</span>
                </a>
                <div id="popover-example-486-39-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640002, 39, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-39-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640002-39-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860122" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR023</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640002, 39, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-39-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640002-39-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620012, 39, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620012-39-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620012-39-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1029</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="39">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840039&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840039">
            </td>
            <td class="ecl-table__cell "><span>40</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 40, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-40-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316_SAW_1</span>
                </a>
                <div id="popover-example-484-40-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440010, 40, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-40-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48440010-40-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440010, 40, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440010-40-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48440010-40-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 40, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-40-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-40-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16000</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="40">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860112&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860112">
            </td>
            <td class="ecl-table__cell "><span>41</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 41, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-41-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">27019</span>
                </a>
                <div id="popover-example-486-41-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 41, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-41-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-41-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860112" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 41, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-41-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-41-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620004, 41, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620004-41-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620004-41-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2013</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="41">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860167&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860167">
            </td>
            <td class="ecl-table__cell "><span>42</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 42, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-42-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">25120</span>
                </a>
                <div id="popover-example-486-42-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640015, 42, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-42-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCrNi</span>
                </a>
                <div id="popover-example-48640015-42-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1262</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640015, 42, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640015-42-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640015-42-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620021, 42, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620021-42-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620021-42-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>65</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="42">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860159&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860159">
            </td>
            <td class="ecl-table__cell "><span>43</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 43, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-43-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">07420</span>
                </a>
                <div id="popover-example-486-43-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 43, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-43-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-43-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 43, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-43-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-43-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620017, 43, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620017-43-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620017-43-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1006</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="43">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860160&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860160">
            </td>
            <td class="ecl-table__cell "><span>44</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 44, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-44-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">07620</span>
                </a>
                <div id="popover-example-486-44-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640013, 44, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-44-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">FeCr</span>
                </a>
                <div id="popover-example-48640013-44-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>BZ1261</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640013, 44, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640013-44-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640013-44-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620017, 44, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620017-44-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">LBE</span>
                </a>
                <div id="popover-example-48620017-44-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>2545</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="44">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860120&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860120">
            </td>
            <td class="ecl-table__cell "><span>45</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 45, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-45-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">11619</span>
                </a>
                <div id="popover-example-486-45-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640010, 45, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-45-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">ER 316L</span>
                </a>
                <div id="popover-example-48640010-45-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860120" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>102684 (L4995)</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole - swj</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640010, 45, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640010-45-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">weld seam</span>
                </a>
                <div id="popover-example-48640010-45-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620011, 45, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620011-45-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620011-45-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5014</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="45">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840036&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840036">
            </td>
            <td class="ecl-table__cell "><span>46</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 46, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-46-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_4</span>
                </a>
                <div id="popover-example-484-46-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440009, 46, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-46-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L(N) IG</span>
                </a>
                <div id="popover-example-48440009-46-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>L4995</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440009, 46, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-46-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440009-46-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 46, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-46-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-46-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="46">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840037&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840037">
            </td>
            <td class="ecl-table__cell "><span>47</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 47, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-47-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_5</span>
                </a>
                <div id="popover-example-484-47-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440009, 47, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-47-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L(N) IG</span>
                </a>
                <div id="popover-example-48440009-47-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>L4995</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440009, 47, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-47-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440009-47-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 47, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-47-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-47-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="47">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840038&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840038">
            </td>
            <td class="ecl-table__cell "><span>48</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 48, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-48-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_6</span>
                </a>
                <div id="popover-example-484-48-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440009, 48, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-48-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L(N) IG</span>
                </a>
                <div id="popover-example-48440009-48-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>L4995</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440009, 48, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440009-48-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440009-48-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 48, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-48-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-48-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="48">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860123&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860123">
            </td>
            <td class="ecl-table__cell "><span>49</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 49, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-49-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">01120</span>
                </a>
                <div id="popover-example-486-49-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640002, 49, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-49-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">15-15 Ti</span>
                </a>
                <div id="popover-example-48640002-49-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860123" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>VR023</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640002, 49, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640002-49-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640002-49-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620013, 49, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620013-49-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620013-49-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5059</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="49">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860113&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860113">
            </td>
            <td class="ecl-table__cell "><span>50</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 50, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-50-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">27619</span>
                </a>
                <div id="popover-example-486-50-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640007, 50, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-50-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640007-50-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span><a href="https://doi.org/10.5290/4860113" target="_blank">18-JAN-2024</a></span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>coupon - flat - ring hole</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640007, 50, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640007-50-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640007-50-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620005, 50, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620005-50-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620005-50-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>5010</span></td>
            <td class="ecl-table__cell "><span>Furnace</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="50">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4840034&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4840034">
            </td>
            <td class="ecl-table__cell "><span>51</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(484, 51, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-484-51-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">316L_2</span>
                </a>
                <div id="popover-example-484-51-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>5</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48440007, 51, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-51-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48440007-51-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>121584</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48440007, 51, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48440007-51-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48440007-51-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48420002, 51, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48420002-51-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Liquid lead</span>
                </a>
                <div id="popover-example-48420002-51-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>16175</span></td>
            <td class="ecl-table__cell "><span>MatLOO</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>480</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="51">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860171&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860171">
            </td>
            <td class="ecl-table__cell "><span>52</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 52, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-52-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">09318</span>
                </a>
                <div id="popover-example-486-52-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640016, 52, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-52-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640016-52-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>56801</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640016, 52, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-52-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640016-52-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620024, 52, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620024-52-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620024-52-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1031</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row odd pointer" data-ecl-table-order="52">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860169&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860169">
            </td>
            <td class="ecl-table__cell "><span>53</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 53, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-53-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">09118</span>
                </a>
                <div id="popover-example-486-53-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>1</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640016, 53, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-53-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640016-53-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>56801</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640016, 53, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-53-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640016-53-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620023, 53, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620023-53-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620023-53-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1008</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
          <tr class="ecl-table__row even pointer" data-ecl-table-order="53">
            <td class="ecl-table__cell">
              <a href="reportSingle?p_RN5=4860172&amp;p_level=1&amp;clear_cn5=true&amp;p_from=ReportDetail" class="jrc-icon view-inverted" title="View test data"></a><input class="hidden-checkbox" type="checkbox" name="p_exclude" value="4860172">
            </td>
            <td class="ecl-table__cell "><span>54</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN1New(486, 54, 1);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-486-54-1" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">09018</span>
                </a>
                <div id="popover-example-486-54-1" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        SI5
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell counter"><span>2</span></td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4New(48640016, 54, 10);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-54-10" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">AISI 316L</span>
                </a>
                <div id="popover-example-48640016-54-10" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        MN4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span> - </span></td>
            <td class="ecl-table__cell "><span>56801</span></td>
            <td class="ecl-table__cell "><span>cylinder</span></td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN4ANew(48640016, 54, 14);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-popover__toggle" aria-controls="popover-example-48640016-54-14" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">plate</span>
                </a>
                <div id="popover-example-48640016-54-14" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        PF4
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell ">
              <span class="ecl-popover" data-ecl-popover-limit data-ecl-auto-init="Popover" >
                <a onclick="getRN2New(48620024, 54, 15);" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-popover__toggle" aria-controls="popover-example-48620024-54-15" data-ecl-popover-toggle="" aria-expanded="false" aria-label="Popover toggle">
                <span class="ecl-link__label">Pb</span>
                </a>
                <div id="popover-example-48620024-54-15" class="ecl-popover__container" hidden="">
                  <div class="ecl-popover__scrollable">
                    <button class="ecl-button ecl-button--tertiary ecl-popover__close ecl-button--icon-only" type="button" data-ecl-popover-close="">
                      <span class="ecl-button__container">
                        <span class="ecl-button__label" data-ecl-label="true">Close</span>
                        <svg class="ecl-icon ecl-icon--m ecl-button__icon" focusable="false" aria-hidden="true" data-ecl-icon="">
                          <use xlink:href="Content/Ecl/dist/images/icons/sprites/icons.svg#close"></use>
                        </svg>
                      </span>
                    </button>
                    <div class="ecl-popover__content">
                      <ul class="ecl-popover__list">
                        EN2
                      </ul>
                    </div>
                  </div>
                </div>
              </span>
            </td>
            <td class="ecl-table__cell "><span>1031</span></td>
            <td class="ecl-table__cell "><span>Capsule</span></td>
            <td class="ecl-table__cell "><span>none</span></td>
            <td class="ecl-table__cell "><span>550</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!--         <div class="scroll-container">
    <div class="scroll-content"></div>
    </div>
    
    <div class="table-container">
    
    </div> -->
  </div>
</div>`;

  return renderedPopover;
};
Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes } };
