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
                    <a href="index.html" data-type="index-link">rest-api-mongodb documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
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
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' : 'data-target="#xs-controllers-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' :
                                            'id="xs-controllers-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' : 'data-target="#xs-injectables-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' :
                                        'id="xs-injectables-links-module-AppModule-27a25d7b411c9ff7a7ad522a3a9fec1f25f6711c0a0cfea73e794e606be1c80130812e4f5621bb2d51670373da2fe30eeb85ae3b9c0f4814f1879612b66a78c8"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' : 'data-target="#xs-controllers-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' :
                                            'id="xs-controllers-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' : 'data-target="#xs-injectables-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' :
                                        'id="xs-injectables-links-module-AuthModule-51fee8ab64dbacb4c255d1d5b3da440ce0681a6146d2fa532c5215031af6128d0b4bcbdb83294b1bb422d2feeb0ac930b7b6cd7fa42b76fc5175cb45cf7127d6"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookModule.html" data-type="entity-link" >BookModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' : 'data-target="#xs-controllers-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' :
                                            'id="xs-controllers-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' }>
                                            <li class="link">
                                                <a href="controllers/BookController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' : 'data-target="#xs-injectables-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' :
                                        'id="xs-injectables-links-module-BookModule-a1a47fb8a29bf9e283deb59c42e80162584134e0adac9f92bac887b80dc853a00615df77ffc12f7ba1d7b598bb98faea19b17790ffa5dad03b7dad0992eb6de5"' }>
                                        <li class="link">
                                            <a href="injectables/BookService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookService</a>
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
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookDto.html" data-type="entity-link" >CreateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/SignUpDto.html" data-type="entity-link" >SignUpDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookDto.html" data-type="entity-link" >UpdateBookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});