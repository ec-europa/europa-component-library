import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';
import iconsSprite from '@ecl/resources-icons/dist/sprites/icons.svg';

export default {
  title: 'Utilities/Easy to read',
  decorators: [withCode],
  parameters: {
    a11y: { disable: true },
    controls: { disable: true },
    EclNotes: { disable: true },
    cssresources: [
      {
        id: `ecl-${getSystem()}-default`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/optional/ecl-${getSystem()}-default.css" />`,
        picked: true,
        hideCode: true,
      },
      {
        id: `ecl-${getSystem()}`,
        code: `<link rel="stylesheet" type="text/css" href="./styles/ecl-${getSystem()}.css" />`,
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
<div class="ecl-container">
  <div class="ecl-row">
    <div class="ecl-col-l-3">
      <nav class="ecl-inpage-navigation" 
         data-ecl-auto-init="InpageNavigation" 
         data-ecl-inpage-navigation="true" 
         aria-labelledby="ecl-inpage-navigation-default"
      >
        <div class="ecl-inpage-navigation__title" id="ecl-inpage-navigation-default">
          Page contents
        </div>

        <div class="ecl-inpage-navigation__body">
          <div class="ecl-inpage-navigation__trigger-wrapper">
            <button type="button" class="ecl-inpage-navigation__trigger" 
                    id="ecl-inpage-navigation-default-trigger" 
                    data-ecl-inpage-navigation-trigger="true" 
                    aria-controls="ecl-inpage-navigation-list" 
                    aria-expanded="false">
              <span class="ecl-inpage-navigation__trigger-current" 
                    data-ecl-inpage-navigation-trigger-current="true">
                Page content
              </span>
              <svg class="ecl-icon ecl-icon--xs ecl-icon--rotate-180 ecl-inpage-navigation__trigger-icon" 
                   focusable="false" aria-hidden="false" role="img">
                <title>Show full page table of contents</title>
                <use xlink:href="${iconsSprite}#corner-arrow"></use>
              </svg>
            </button>
          </div>

          <ul class="ecl-inpage-navigation__list" 
              data-ecl-inpage-navigation-list="true" 
              id="ecl-inpage-navigation-default-list" 
              style="max-height: 259px;">
            <li class="ecl-inpage-navigation__item">
              <a href="#easy-to-read" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                Easy to read version
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#european-union" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                The European Union
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#how-the-european-union" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                How the European Union started
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#goals-and-values" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                The goals and values of the European Union
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#peace-in-europe" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                Peace in Europe
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#free-move" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                Free move
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#in-the-world" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                The European Union in the world
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#becoming-part" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                Becoming part of the European Union
              </a>
            </li>
            <li class="ecl-inpage-navigation__item">
              <a href="#more-info" class="ecl-link ecl-inpage-navigation__link" 
                 data-ecl-inpage-navigation-link="">
                More information
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="ecl-col-l-9">
      <div class="ecl-easy-to-read">
        <div class="ecl-row">
          <div class="ecl-col-s-12">
            <div class="ecl-u-mb-l">
              <article dir="ltr">
                <div>
                  <h2 id="easy-to-read">Easy to read version</h2>
                  <div class="ecl">
                    <p>Easy to read is a way<br> to make information easy for everyone<br> to read and understand.</p>
                    <div class="ecl-media-container" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer">
                      <figure class="ecl-media-container__figure">
                        <div class="ecl-media-container__media">
                          <img 
                            loading="eager"
                            class="ecl-u-max-width-100 ecl-u-height-auto ecl-media-container__media--ratio-custom"
                            src="https://european-union.europa.eu/sites/default/files/styles/embed_medium/public/2021-09/symbol-for-easy-to-read.jpg"
                          >
                        </div>
                      </figure>
                    </div>
                    <p>© European Easy-to-Read Logo: Inclusion Europe. More information at&nbsp;
                      <a href="https://www.inclusion-europe.eu/easy-to-read/" class="ecl-link--icon ecl-link--icon-after">
                        <span class="ecl-link__label">https://www.inclusion-europe.eu/easy-to-read/</span>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" class="ecl-icon ecl-icon--xs ecl-link__icon" focusable="false" aria-hidden="true">
                          <use xlink:href="${iconsSprite}#external"></use>
                        </svg>
                      </a>
                    </p>
                  </div>
                  <h2 id="european-union">The European Union</h2>
                  <div class="ecl">
                    <p>The European Union is a group of 27 countries in Europe.<br>These countries came together<br>to make things better, easier and safer for people.<br>They agreed to work together and help each other.</p>
                    <div class="ecl-media-container" data-ecl-media-container="true" data-ecl-auto-init="MediaContainer">
                      <figure class="ecl-media-container__figure">
                        <picture class="ecl-picture ecl-media-container__picture">
                          <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/embed_large/public/2024-05/european-map_en.jpg?itok=LOOq8mBS" alt="Map with all countries of the European Union">
                        </picture>
                      </figure>
                    </div>
                  </div>
                  <h2 id="how-the-european-union">How the European Union started</h2>
                  <article class="ecl-featured-item">
                    <div class="ecl-featured-item__container">
                      <div class="ecl-featured-item__item">
                        <div class="ecl-featured-item__description">
                          <div class="ecl">
                            <p>The idea to make the European Union came<br> after two big wars happened in Europe.<br> Countries in Europe saw that<br> it is better to work together<br> than fighting against each other.</p>
                          </div>
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
                            <p>Soon, more and more countries in Europe joined them<br> and the European Union was made.</p>
                          </div>
                        </div>
                      </div>
                      <div class="ecl-featured-item__item">
                        <div class="ecl-media-container ecl-featured-item__media_container">
                          <figure class="ecl-media-container__figure">
                            <picture class="ecl-picture ecl-media-container__picture">
                              <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-09/people-working-together_2.jpg?itok=D1nKUBOh" alt="People working together">
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                  <h2 id="goals-and-values">The goals and values of the European Union</h2>
                  <article class="ecl-featured-item">
                    <div class="ecl-featured-item__container">
                      <div class="ecl-featured-item__item">
                        <div class="ecl-featured-item__description">
                          <div class="ecl">
                            <p>All countries that are part of the European Union work together<br> to make sure that:</p>
                          </div>
                          <div class="ecl">
                            <ul>
                              <li>there is peace in Europe</li>
                              <li>people have good lives</li>
                              <li>things are fair for all people and nobody is left out</li>
                              <li>the languages and cultures of all people<br> are respected</li>
                              <li>there is a strong European economy<br> and countries use the same coin<br> to do business together.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div class="ecl-featured-item__item">
                        <div class="ecl-media-container ecl-featured-item__media_container">
                          <figure class="ecl-media-container__figure">
                            <picture class="ecl-picture ecl-media-container__picture">
                              <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/list_en.png?itok=eKFz_2LR" alt="A list">
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                  <h2 id="peace-in-europe">Peace in Europe</h2>
                  <article class="ecl-featured-item">
                    <div class="ecl-featured-item__container">
                      <div class="ecl-featured-item__item">
                        <div class="ecl-featured-item__description">
                          <div class="ecl">
                            <p>The countries of the European Union<br> share some important values.<br> For example, they work to make sure that all people are equal<br> and their rights are respected.</p>
                          </div>
                          <div class="ecl">
                            <p>After the European Union was created,<br> there were no more wars between the countries<br> that are part of the European Union.<br> Thanks to the European Union,<br> all countries in Europe work together in peace.</p>
                          </div>
                        </div>
                      </div>
                      <div class="ecl-featured-item__item">
                        <div class="ecl-media-container ecl-featured-item__media_container">
                          <figure class="ecl-media-container__figure">
                            <picture class="ecl-picture ecl-media-container__picture">
                              <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/circle_en.png?itok=PwbDz7Uh" alt="People holding hands in circle">
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article class="ecl-featured-item">
                    <div class="ecl-featured-item__container">
                      <div class="ecl-featured-item__item">
                        <div class="ecl-featured-item__description">
                          <div class="ecl">
                            <p>In 2012, the European Union won a big award<br> which is called ‘<strong>the Nobel Peace Prize</strong>’.<br> This award was given to the European Union<br> for its good work keeping peace in Europe.</p>
                          </div>
                        </div>
                      </div>
                      <div class="ecl-featured-item__item">
                        <div class="ecl-media-container ecl-featured-item__media_container">
                          <figure class="ecl-media-container__figure">
                            <picture class="ecl-picture ecl-media-container__picture">
                              <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/peace-prize_en.png?itok=z1rnEaTo" alt="The symbol of the Peace Prize">
                            </picture>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </article>
              <h2 id="free-move">Free move</h2>
              <article class="ecl-featured-item">
                <div class="ecl-featured-item__container ">
                  <div class="ecl-featured-item__item">
                    <div class="ecl-featured-item__description">
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
                  </div>
                  <div class="ecl-featured-item__item">
                    <div class="ecl-media-container ecl-featured-item__media_container">
                      <figure class="ecl-media-container__figure">
                        <picture class="ecl-picture ecl-media-container__picture">
                          <img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/embed_medium/public/2021-10/happy-travelers_en.jpg" alt="Happy travelers">
                      </figure>
                    </div>
                  </div>
                </div>
                </article>
              <h2 id="in-the-world">The European Union in the world</h2>
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
              <h2 id="becoming-part">Becoming part of the European Union</h2>
              <article class="ecl-featured-item">
                <div class="ecl-featured-item__container ">
                  <div class="ecl-featured-item__item">
                    <div class="ecl-featured-item__description">
                      <div class="ecl">
                        <p>To become part of the European Union,<br>
                          a country must:
                        </p>
                      </div>
                      <div class="ecl">
                        <ul>
                          <li>agree with all the laws and values<br>
                            of the European Union.
                          </li>
                          <li>work to make sure these laws and values<br>
                            are respected.
                          </li>
                        </ul>
                        <p>This may take a very long time to happen.</p>
                      </div>
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
              <h2 id="more-info">More information</h2>
              <article class="ecl-featured-item">
                <div class="ecl-featured-item__container">
                  <div class="ecl-featured-item__item">
                    <div class="ecl-featured-item__description">
                      <div class="ecl">
                        <p><a href="/example">Click here</a>&nbsp;to find more information<br>
                          about the European Union in your own language.</p><p>If you have questions about the European Union,<br>
                          you can fill this&nbsp;<a href="/example">online form here</a>.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="ecl-featured-item__item">
                    <div class="ecl-media-container ecl-featured-item__media_container">
                      <figure class="ecl-media-container__figure">
                        <picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://european-union.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2021-10/laptop_en.png?itok=NyMBZMM6" alt="A list"></picture>
                      </figure>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

Default.storyName = 'default';
