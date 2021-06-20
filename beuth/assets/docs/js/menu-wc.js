'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/java_error_in_idea_5723.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Eingeben zur Suche"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Los geht&#x27;s</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Übersicht
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Abhängigkeiten
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#additional-pages"'
                            : 'data-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/inhaltsverzeichnis.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#additional-page-7c80530e38478466fe0d2eb99bd4ad26"' : 'data-target="#xs-additional-page-7c80530e38478466fe0d2eb99bd4ad26"' }>
                                                <span class="link-name">Inhaltsverzeichnis</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-7c80530e38478466fe0d2eb99bd4ad26"' : 'id="xs-additional-page-7c80530e38478466fe0d2eb99bd4ad26"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/inhaltsverzeichnis/tech-stack.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Tech Stack</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/inhaltsverzeichnis/architecture.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Architecture</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/inhaltsverzeichnis/dea-projekt.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">DEA Projekt</a>
                                            </li>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/inhaltsverzeichnis/grammar-projekt.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">Grammar Projekt</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-b1be5f40fbfe50127b47c167f31047c9"' : 'data-target="#xs-components-links-module-AppModule-b1be5f40fbfe50127b47c167f31047c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-b1be5f40fbfe50127b47c167f31047c9"' :
                                            'id="xs-components-links-module-AppModule-b1be5f40fbfe50127b47c167f31047c9"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DialogComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeaModule.html" data-type="entity-link">DeaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' : 'data-target="#xs-components-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' :
                                            'id="xs-components-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' }>
                                            <li class="link">
                                                <a href="components/CytoGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CytoGraphComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeaComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' : 'data-target="#xs-injectables-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' :
                                        'id="xs-injectables-links-module-DeaModule-6d2fc89e66ee3662b0dd643711186177"' }>
                                        <li class="link">
                                            <a href="injectables/DeaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DeaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GrammarModule.html" data-type="entity-link">GrammarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' : 'data-target="#xs-components-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' :
                                            'id="xs-components-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' }>
                                            <li class="link">
                                                <a href="components/GrammarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrammarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GrammarGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GrammarGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' : 'data-target="#xs-injectables-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' :
                                        'id="xs-injectables-links-module-GrammarModule-4f4f869268bf5bc0b11fe88995f01400"' }>
                                        <li class="link">
                                            <a href="injectables/GrammarGraphService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GrammarGraphService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/GrammarService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>GrammarService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/KellerModule.html" data-type="entity-link">KellerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' : 'data-target="#xs-components-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' :
                                            'id="xs-components-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' }>
                                            <li class="link">
                                                <a href="components/KellerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KellerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/KellerGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">KellerGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' : 'data-target="#xs-injectables-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' :
                                        'id="xs-injectables-links-module-KellerModule-03c5a27862fa06f8d18c79a96d2a4e45"' }>
                                        <li class="link">
                                            <a href="injectables/KellerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>KellerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MainModule.html" data-type="entity-link">MainModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MainModule-f1405be766bc8d18bffd662b23ad1eb6"' : 'data-target="#xs-components-links-module-MainModule-f1405be766bc8d18bffd662b23ad1eb6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MainModule-f1405be766bc8d18bffd662b23ad1eb6"' :
                                            'id="xs-components-links-module-MainModule-f1405be766bc8d18bffd662b23ad1eb6"' }>
                                            <li class="link">
                                                <a href="components/MainComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TmModule.html" data-type="entity-link">TmModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TmModule-ec120642d64f823e316083f5f728a109"' : 'data-target="#xs-components-links-module-TmModule-ec120642d64f823e316083f5f728a109"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TmModule-ec120642d64f823e316083f5f728a109"' :
                                            'id="xs-components-links-module-TmModule-ec120642d64f823e316083f5f728a109"' }>
                                            <li class="link">
                                                <a href="components/TmComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TmComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Klassen</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DEAException.html" data-type="entity-link">DEAException</a>
                            </li>
                            <li class="link">
                                <a href="classes/ExpressionGrammarModel.html" data-type="entity-link">ExpressionGrammarModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/RuleSetInterface.html" data-type="entity-link">RuleSetInterface</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CytoGraphService.html" data-type="entity-link">CytoGraphService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/KellerGraphService.html" data-type="entity-link">KellerGraphService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link">AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FourTuple.html" data-type="entity-link">FourTuple</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GrammarModel.html" data-type="entity-link">GrammarModel</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GrammarState.html" data-type="entity-link">GrammarState</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Verschiedenes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Funktionen</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variablen</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});