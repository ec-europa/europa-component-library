import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

export default {
  title: 'Utilities/Easy to read',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    controls: { disable: true },
    EclNotes: { disable: true },
    cssresources: [
      {
        id: `ecl-${getSystem()}`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-${getSystem()}.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: `ecl-${getSystem()}-default`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-${getSystem()}-default.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: `ecl-${getSystem()}-utilities`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-${getSystem()}-utilities.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: `ecl-${getSystem()}-easy-to-read`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-${getSystem()}-easy-to-read.css" />`,
        picked: true,
        hideCode: true,
      },
    ],
  },
};

export const Default = () => `
  <div class="ecl-container ecl-easy-to-read" >
    <div class="ecl-row">
      <div class="ecl-col-s-12 ewcms-top-sidebar">
        <div>
          <div data-drupal-messages-fallback="" class="hidden"></div>
        </div>
      </div>
    </div>
    <div class="ecl-row">
      <div class="ecl-col-s-12">
        <div class="ecl-u-mb-l">
          <article dir="ltr">
            <div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">Easy to read version</h2>
                <div class="ecl">
                  <p>Easy to read is a way<br>
                    to make information easy for everyone<br>
                    to read and understand.
                  </p>
                  <div class="ecl-media-container ecl-media-container--custom-ratio ecl-u-mb-s ewcms-embed-medium" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer" data-ecl-auto-initialized="true">
                    <figure class="ecl-media-container__figure">
                      <div class="ecl-media-container__media"><img loading="eager" class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom" src="https://www.inclusion-europe.eu/wp-content/uploads/2019/03/Easy-to-read-logo-150x150.jpg"></div>
                    </figure>
                  </div>
                  <p>&nbsp;</p>
                  <p>
                    © European Easy-to-Read Logo: Inclusion Europe. More information at&nbsp;
                    <a href="https://www.inclusion-europe.eu/easy-to-read/" class="ecl-link--icon ecl-link--icon-after">
                      <span class="ecl-link__label">https://www.inclusion-europe.eu/easy-to-read/</span>
                      <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="ecl-icon ecl-icon--xs ecl-link__icon" focusable="false" aria-hidden="true">
                        <use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#external"></use>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The European Union</h2>
                <div class="ecl">
                  <p>The European Union is a group of 27 countries in Europe.<br>These countries came together<br>to make things better, easier and safer for people.<br>They agreed to work together and help each other.</p>
                  <div class="ecl-media-container ecl-media-container--custom-ratio ecl-u-mb-s ewcms-embed-large" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer" data-ecl-auto-initialized="true">
                    <figure class="ecl-media-container__figure">
                      <div class="ecl-media-container__media"><img loading="eager" class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom" srcset="https://european-union.europa.eu/sites/default/files/styles/embed_large/public/2024-05/european-map_en.jpg?itok=LOOq8mBS" alt="Map with all countries of the European Union"></div>
                    </figure>
                  </div>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">How the European Union started</h2>
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>The idea to make the European Union came<br><br>
                            after two big wars happened in Europe.<br><br>
                            Countries in Europe saw that<br><br>
                            it is better to work together<br><br>
                            than fighting against each other.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-09/people-working-together_2.jpg?itok=D1nKUBOh" alt="People working together"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>In the beginning, only 6 countries in Europe started working together:</p>
                  <ul>
                    <li>Belgium</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Italy</li>
                    <li>Luxembourg</li>
                    <li>Netherlands</li>
                  </ul>
                  <p>Soon, more and more countries in Europe joined them<br>
                    and the European Union was made.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>Today, 27 countries are part of the European Union.<br>These countries are:</p>
                          <ul>
                            <li>Austria</li>
                            <li>Belgium</li>
                            <li>Bulgaria</li>
                            <li>Croatia</li>
                            <li>Cyprus</li>
                            <li>Czechia</li>
                            <li>Denmark</li>
                            <li>Estonia</li>
                            <li>Finland</li>
                            <li>France</li>
                            <li>Germany</li>
                            <li>Greece</li>
                            <li>Hungary</li>
                            <li>Ireland</li>
                            <li>Italy</li>
                            <li>Latvia</li>
                            <li>Lithuania</li>
                            <li>Luxembourg</li>
                            <li>Malta</li>
                            <li>Netherlands</li>
                            <li>Poland</li>
                            <li>Portugal</li>
                            <li>Romania</li>
                            <li>Slovakia</li>
                            <li>Slovenia</li>
                            <li>Spain</li>
                            <li>Sweden</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2024-05/european-map_en.jpg?itok=90ovtdSo" alt="Map with all countries of the European Union"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>In June 2016 the United Kingdom decided<br>
                    to stop being part of the European Union.<br>
                    So from 31 January 2020, the United Kingdom<br>
                    is no longer part of the European Union.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The goals and values of the European Union</h2>
                <div class="ecl">
                  <p>All countries that are part of the European Union work together<br>
                    to make sure that:
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>there is peace in Europe</li>
                            <li>people have good lives</li>
                            <li>things are fair for all people and nobody is left out</li>
                            <li>the languages and cultures of all people<br><br>
                              are respected
                            </li>
                            <li>there is a strong European economy<br><br>
                              and countries use the same coin<br><br>
                              to do business together.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/list_en.png?itok=eKFz_2LR" alt="A list"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>The countries of the European Union<br>
                    share some important values.<br>
                    For example, they work to make sure that all people are equal<br>
                    and their rights are respected.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <h2>Peace in Europe</h2>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>After the European Union was created,<br><br>
                            there were no more wars between the countries<br><br>
                            that are part of the European Union.<br><br>
                            Thanks to the European Union,<br><br>
                            all countries in Europe work together in peace.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/circle_en.png?itok=PwbDz7Uh" alt="People holding hands in circle"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>In 2012, the European Union won a big award<br><br>
                            which is called ‘<strong>the Nobel Peace Prize</strong>’.<br><br>
                            This award was given to the European Union<br><br>
                            for its good work keeping peace in Europe.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/peace-prize_en.png?itok=z1rnEaTo" alt="The symbol of the Peace Price"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">Free move</h2>
                <div class="ecl">
                  <p>The European Union made it easier for people<br>
                    to move freely from one country to another.<br>
                    They can live, study or work<br>
                    in any country of the European Union they want.<br>
                    For example, a person from France can choose<br>
                    to move to Italy and work there.<br>
                    Or a student from Belgium can go study in a university in Greece.
                  </p>
                  <p>Things, services and money can also move freely<br>
                    from one country of the European Union to another.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The European Union in the world</h2>
                <div class="ecl">
                  <p>The European Union plays an important role in the world in many ways.<br>
                    For example:
                  </p>
                  <ul>
                    <li>It sells many things and services to other countries.<br>
                      Also, it buys things from other countries.<br>
                      This way it helps the world economy keep going.
                    </li>
                    <li>It helps millions of people<br>
                      who live in poorer countries outside the European Union.
                    </li>
                    <li>It tries to make the world a safer place<br>
                      where people are treated fairly and laws are respected.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">Becoming part of the European Union</h2>
                <div class="ecl">
                  <p>To become part of the European Union,<br>
                    a country must:
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>agree with all the laws and values<br><br>
                              of the European Union.
                            </li>
                            <li>work to make sure these laws and values<br><br>
                              are respected.
                            </li>
                          </ul>
                          <p>This may take a very long time to happen.</p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/agreement_en.png?itok=IhmztENA" alt="Agreement"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>Some countries are now working to become part of the European Union.<br>
                    These countries are:
                  </p>
                  <ul>
                    <li>Albania</li>
                    <li>Bosnia and Herzegovina</li>
                    <li>Georgia</li>
                    <li>Moldova</li>
                    <li>Montenegro</li>
                    <li>North Macedonia</li>
                    <li>Serbia</li>
                    <li>Türkiye</li>
                    <li>Ukraine</li>
                  </ul>
                  <p>To become part of the European Union,<br>
                    these countries must work<br>
                    to make all laws and values of the European Union<br>
                    happen in them.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The Schengen Area</h2>
                <div class="ecl">
                  <p>The European Union made the ‘<strong>Schengen Area</strong>’.</p>
                  <p>The Schengen Area is an area without borders.<br>
                    In this area, people can travel from country to country freely and easily.<br>
                    They do not have to go through checks and controls<br>
                    when they pass from one country to another.
                  </p>
                  <p>Thanks to the Schengen Area, it is now easier for people<br>
                    to travel for work or tourism.
                  </p>
                  <p>The Schengen Area was made in 1985.<br>
                    Today 25 out of the 27 countries of the European Union<br>
                    are part of the Schengen Area.
                  </p>
                  <p>These countries are:</p>
                  <ul>
                    <li>Austria</li>
                    <li>Belgium</li>
                    <li>Bulgaria</li>
                    <li>Croatia</li>
                    <li>Czechia</li>
                    <li>Denmark</li>
                    <li>Estonia</li>
                    <li>Finland</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Greece</li>
                    <li>Hungary</li>
                    <li>Italy</li>
                    <li>Latvia</li>
                    <li>Lithuania</li>
                    <li>Luxembourg</li>
                    <li>Malta</li>
                    <li>Netherlands</li>
                    <li>Poland</li>
                    <li>Portugal</li>
                    <li>Romania</li>
                    <li>Slovakia</li>
                    <li>Slovenia</li>
                    <li>Spain</li>
                    <li>Sweden</li>
                  </ul>
                  <p>Also, 4 countries outside the European Union<br>
                    are part of the Schengen Area:
                  </p>
                  <ul>
                    <li>Iceland</li>
                    <li>Liechtenstein</li>
                    <li>Norway</li>
                    <li>Switzerland</li>
                  </ul>
                  <p>That means that people can travel freely and easily<br>
                    from one of these countries to another.<br>
                    This way it is easier for people to visit any of these countries<br>
                    for tourism or for work.
                  </p>
                  <div class="ecl-media-container ecl-media-container--custom-ratio ecl-u-mb-s ewcms-embed-medium" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer" data-ecl-auto-initialized="true">
                    <figure class="ecl-media-container__figure">
                      <div class="ecl-media-container__media"><img loading="eager" class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom" srcset="/sites/default/files/styles/embed_medium/public/2021-10/happy-travelers_en.jpg?itok=Yzcgs5PM 1x, /sites/default/files/styles/embed_medium_2x/public/2021-10/happy-travelers_en.jpg?itok=LJ0Z2MXM 2x" width="429" height="306" src="/sites/default/files/styles/embed_medium/public/2021-10/happy-travelers_en.jpg?itok=Yzcgs5PM" alt="Happy travelers"></div>
                    </figure>
                  </div>
                  <p>&nbsp;</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">Languages of the European Union</h2>
                <div class="ecl">
                  <p>In every country of the European Union<br>
                    people speak their own language.<br>
                    The European Union protects the right of people<br>
                    to communicate in their own language.
                  </p>
                  <div class="ecl-media-container ecl-media-container--custom-ratio ecl-u-mb-s ewcms-embed-medium" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer" data-ecl-auto-initialized="true">
                    <figure class="ecl-media-container__figure">
                      <div class="ecl-media-container__media"><img loading="eager" class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom" srcset="/sites/default/files/styles/embed_medium/public/2021-10/hello_en.jpg?itok=iS8KyuLZ 1x, /sites/default/files/styles/embed_medium_2x/public/2021-10/hello_en.jpg?itok=uF4aALp8 2x" width="409" height="239" src="/sites/default/files/styles/embed_medium/public/2021-10/hello_en.jpg?itok=iS8KyuLZ" alt="The word 'hello' in different languages"></div>
                    </figure>
                  </div>
                  <p>That is why the European Union<br>
                    makes all important information and documents<br>
                    in all the languages that people speak in its countries:
                  </p>
                  <ul>
                    <li>Bulgarian</li>
                    <li>Croatian</li>
                    <li>Czech</li>
                    <li>Danish</li>
                    <li>Dutch</li>
                    <li>English</li>
                    <li>Estonian</li>
                    <li>Finnish</li>
                    <li>French</li>
                    <li>German</li>
                    <li>Greek</li>
                    <li>Hungarian</li>
                    <li>Irish</li>
                    <li>Italian</li>
                    <li>Latvian</li>
                    <li>Lithuanian</li>
                    <li>Maltese</li>
                    <li>Polish</li>
                    <li>Portuguese</li>
                    <li>Romanian</li>
                    <li>Slovak</li>
                    <li>Slovenian</li>
                    <li>Spanish</li>
                    <li>Swedish</li>
                  </ul>
                  <p>This way all people in the European Union<br>
                    can get important information in their own language<br>
                    and understand it.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The coin of the European Union</h2>
                <div class="ecl">
                  <p>Most countries that are part of the European Union use the same coin.</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>This coin is called ‘<strong>Euro</strong>’.<br><br>
                            Using the same coin helps countries<br><br>
                            in the European Union to do business together.<br><br>
                            For example, people from Spain<br><br>
                            can buy things they want from Belgium<br><br>
                            easily and without extra costs.<br><br>
                            Using the same coin<br><br>
                            makes it easier for people to travel,<br><br>
                            buy things online from other countries<br><br>
                            and have more options.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/european-money_en.png?itok=PhxxVFaE" alt="European money"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>Today, 20 out of 27 European Union countries use the euro.</p>
                  <p>These countries are:</p>
                  <ul>
                    <li>Austria</li>
                    <li>Belgium</li>
                    <li>Croatia</li>
                    <li>Cyprus</li>
                    <li>Estonia</li>
                    <li>Finland</li>
                    <li>France</li>
                    <li>Germany</li>
                    <li>Greece</li>
                    <li>Ireland</li>
                    <li>Italy</li>
                    <li>Latvia</li>
                    <li>Lithuania</li>
                    <li>Luxembourg</li>
                    <li>Malta</li>
                    <li>Netherlands</li>
                    <li>Portugal</li>
                    <li>Slovakia</li>
                    <li>Slovenia</li>
                    <li>Spain</li>
                  </ul>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The European flag</h2>
                <div class="ecl">
                  <p>This is the flag of the European Union:</p>
                  <div class="ecl-media-container ecl-media-container--custom-ratio ecl-u-mb-s ewcms-embed-medium" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer" data-ecl-auto-initialized="true">
                    <figure class="ecl-media-container__figure">
                      <div class="ecl-media-container__media"><img loading="eager" class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom" srcset="/sites/default/files/styles/embed_medium/public/2021-10/flag_en.jpg?itok=PQXMf2ta 1x, /sites/default/files/styles/embed_medium_2x/public/2021-10/flag_en.jpg?itok=mwaANNUe 2x" width="319" height="213" src="/sites/default/files/styles/embed_medium/public/2021-10/flag_en.jpg?itok=PQXMf2ta" alt="The flag of the European Union"></div>
                    </figure>
                  </div>
                  <p>The flag of the European Union is blue<br>
                    and has a circle of gold stars on it.<br>
                    It is a symbol that shows that the countries of the European Union<br>
                    are united and stand by each other.
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">The European anthem</h2>
                <div class="ecl">
                  <p>Every country has a melody<br>
                    that better shows its values and culture as a country.<br>
                    This melody is called ‘<strong>anthem</strong>’.
                  </p>
                  <p>The European Union has its own anthem too.<br>
                    In 1985, people who make decisions<br>
                    in the European Union<br>
                    chose a melody of a very important composer<br>
                    to be the anthem of the European Union.
                  </p>
                  <p>This composer is called Ludwig van Beethoven.</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p>The melody shows how important it is<br><br>
                            that all people are free, live in peace<br><br>
                            and stand by each other.<br><br>
                            The European Union believes in these values<br><br>
                            and that is why it has chosen this melody<br><br>
                            to be its anthem.
                          </p>
                          <p>
                            If you want to listen to the anthem of the European Union,&nbsp;
                            <a href="https://www.coe.int/en/web/about-us/the-european-anthem" class="ecl-link--icon ecl-link--icon-after">
                              <span class="ecl-link__label">click here</span>
                              <svg class="ecl-icon ecl-icon--xs ecl-link__icon" focusable="false" aria-hidden="true" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#external"></use>
                              </svg>
                            </a>
                            .
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/listening_en.png?itok=RJ6YpVtJ" alt="Symbol for listening to a melody"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">United in diversity</h2>
                <div class="ecl">
                  <p>The European Union uses the phrase ‘<strong>united in diversity</strong>’<br>
                    to show what its values are.
                  </p>
                  <p>Being united in diversity means that:</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>people in the European Union<br><br>
                              may have different cultures or languages<br><br>
                              but they stand by each other<br><br>
                              and work together in peace.
                            </li>
                            <li>there is nothing wrong<br><br>
                              about having different languages or cultures.<br><br>
                              On the contrary.<br><br>
                              People with different cultures<br><br>
                              can learn more things from each other and work well together.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/circle_en.png?itok=PwbDz7Uh" alt="People holding hands in circle"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <h2 class="ecl-u-type-heading-2">How the European Union works</h2>
                <div class="ecl">
                  <p>The European Union has 3 main bodies:</p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>the&nbsp;<strong>European Commission</strong><br><br>
                              The people of the European Commission<br><br>
                              suggest laws for the European Union.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/european-commission_en.png?itok=TRe-YF1q" alt="Symbol of the European Commission"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>the&nbsp;<strong>European Parliament</strong><br><br>
                              The people of the European Parliament<br><br>
                              are elected by all people in Europe<br><br>
                              to stand for their rights.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/european-parliament_en.png?itok=vfC5LsYy" alt="Symbol of the European Parliament"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>the&nbsp;<strong>Council of the European Union</strong><br><br>
                              People who make decisions<br><br>
                              in every country of the European Union<br><br>
                              come together and make<br><br>
                              the Council of the European Union.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/council-of-european-union_en.png?itok=iMvfOqrL" alt="Symbol of the Council of the European Union"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <p>These 3 bodies are very important for the European Union.<br>
                    They work closely together to make things better in Europe:
                  </p>
                  <ul>
                    <li>The&nbsp;<strong>European Commission</strong>&nbsp;suggests laws.</li>
                    <li>The&nbsp;<strong>European Parliament</strong><br>
                      and the&nbsp;<strong>Council of the European Union</strong><br>
                      discuss these laws and decide if they want these laws<br>
                      to happen in Europe.
                    </li>
                    <li>If they decide that a law must happen in Europe,<br>
                      all countries of the European Union<br>
                      must work to make this law happen in them.
                    </li>
                  </ul>
                  <p>Other bodies that are important for the European Union are:</p>
                  <ul>
                    <li>The&nbsp;<strong>Court of Justice of the European Union</strong><br>
                      that makes sure that all laws happen correctly<br>
                      in the European Union.
                    </li>
                    <li>the&nbsp;<strong>Court of Auditors</strong><br>
                      that checks if the money of the European Union<br>
                      is spent in the right way.
                    </li>
                  </ul>
                  <p>There are also other bodies of the European Union<br>
                    that are doing important work.<br>
                    For example, there are bodies that:
                  </p>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <ul>
                            <li>check if the European Union works in the right<br><br>
                              way and respects the rights of all people.
                            </li>
                            <li>publish useful information<br><br>
                              about the European Union.
                            </li>
                            <li>choose the people who have the skills<br><br>
                              to work for the European Union.
                            </li>
                            <li>stand for the rights of all people in Europe<br><br>
                              like people with disabilities, workers and others.
                            </li>
                          </ul>
                          <p>All these bodies work together to make sure that the European Union works<br><br>
                            in the right way for the good of its people.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/list_en.png?itok=eKFz_2LR" alt="A list"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div class="ecl-u-mb-2xl">
                <div class="ecl">
                  <h2>More information</h2>
                </div>
              </div>
              <div class="ecl-u-mb-2xl">
                <article class="ecl-featured-item">
                  <div class="ecl-featured-item__container ecl-featured-item__container--right">
                    <div class="ecl-featured-item__item">
                      <div class="ecl-featured-item__description">
                        <div class="ecl">
                          <p><a href="/index_en">Click here</a>&nbsp;to find more information<br><br>
                            about the European Union in your own language.
                          </p>
                          <p>If you have questions about the European Union,<br><br>
                            you can fill this&nbsp;<a href="/contact-eu/write-us_en">online form here</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="ecl-featured-item__item">
                      <div class="ecl-media-container ecl-featured-item__media_container">
                        <figure class="ecl-media-container__figure">
                          <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/laptop_en.png?itok=NyMBZMM6" alt="Hands typing on a laptop"></picture>
                        </figure>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  `;

Default.storyName = 'default';
