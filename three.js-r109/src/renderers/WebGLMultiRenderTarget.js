import { WebGLRenderTarget } from './WebGLRenderTarget.js';

function WebGLMultiRenderTarget ( width, height, options ) {

	WebGLRenderTarget.call( this, width, height, options );

	this.attachments = [ this.texture ];
};

WebGLMultiRenderTarget.prototype = Object.assign( Object.create( WebGLRenderTarget.prototype ), {
    
    constructor: WebGLMultiRenderTarget,

    isWebGLMultiRenderTarget: true,
    
    copy: function ( source ) {
        
        WebGLRenderTarget.prototype.copy.call( this, source );

        this.attachments = source.attachments.map(function ( attachment ) {
            return attachment.clone();
        });

        return this;
    }
});

export { WebGLMultiRenderTarget };