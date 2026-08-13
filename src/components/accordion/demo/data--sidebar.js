// Simple content for demo
module.exports = {
  sidebar: true,
  items: [
    {
      toggle: {
        label: 'Filter by',
      },
      content: `<form>
      <div class="ecl-form-group">
        <label for="example-input-id-1" id="example-input-id-1-label" class="ecl-form-label">Label<span class="ecl-form-label__optional">(optional)</span></label>
        <div class="ecl-help-block" id="example-input-id-1-helper">Optional help text</div>
        <input id="example-input-id-1" class="ecl-text-input ecl-text-input--m" type="text" placeholder="Placeholder text" aria-describedby="example-input-id-1-helper"></div>
        <div class="ecl-form-group ecl-u-mt-m">
          <label for="example-input-id-2" id="example-input-id-2-label" class="ecl-form-label">Label<span class="ecl-form-label__required">*</span>
            <div class="ecl-help-block--hidden">Format: dd-mm-yyyy</div>
          </label>
          <div class="ecl-help-block" id="example-input-id-2-helper" aria-hidden="true">Format: dd-mm-yyyy</div>
          <div class="ecl-datepicker ecl-datepicker--m" aria-describedby="example-input-id-2-helper" data-ecl-auto-init="Datepicker" data-value="2025-08-30 14:13:48 Europe/Brussels" data-placeholder="DD-MM-YYYY" data-ecl-datepicker-toggle><duet-date-picker identifier="example-input-id-2" name="example-input-name-2" first-day-of-week="1" min="2024-06-15" max="2026-08-30" required></duet-date-picker></div>
        </div>
        <fieldset class="ecl-form-group ecl-u-mt-m" role="radiogroup" aria-required="true">
          <legend id="radio-default-label" class="ecl-form-label">Do you need help?<span class="ecl-form-label__required">*</span>
            <div class="ecl-help-block--hidden">Optional help text</div>
          </legend>
          <div class="ecl-help-block" id="radio-default-helper" aria-hidden="true">Optional help text</div>
          <div class="ecl-radio ecl-radio--binary">
            <input id="radio-binary-1" name="radio-group-1" class="ecl-radio__input" type="radio" value="yes" checked required>
            <label class="ecl-radio__label" for="radio-binary-1">
              <span class="ecl-radio__box">
                <span class="ecl-radio__box-inner"></span>
              </span>
              <span class="ecl-radio__text">Yes</span>
            </label>
          </div>
          <div class="ecl-radio ecl-radio--binary">
            <input id="radio-binary-2" name="radio-group-1" class="ecl-radio__input" type="radio" value="no" required>
            <label class="ecl-radio__label" for="radio-binary-2">
              <span class="ecl-radio__box">
                <span class="ecl-radio__box-inner"></span>
              </span>
              <span class="ecl-radio__text">No</span>
            </label>
          </div>
        </fieldset>
        <div class="form-actions js-form-wrapper form-wrapper ecl-form-group ecl-u-mt-m">
          <button class="ecl-button ecl-button--primary button js-form-submit form-submit" type="submit" data-drupal-selector="edit-submit" id="edit-submit" name="op" value="Search">Search</button>
          <button class="ecl-button ecl-button--secondary button button--secondary ecl-u-ml-s js-form-submit form-submit" type="submit" name="op" value="Clear filters">Clear</button>
        </div></form>`,
    },
  ],
  icon: [
    {
      name: 'sliders-horizontal',
      family: 'phosphor',
      title: 'Expand',
    },
    {
      name: 'minus',
      family: 'phosphor',
      title: 'Collapse',
    },
  ],
};
