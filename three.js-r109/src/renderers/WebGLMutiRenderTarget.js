function WebGLMultiRenderTarget ( width, height, options ) {

	WebGLRenderTarget.call( this, width, height, options );

	this.attachments = [ this.texture ];
};

WebGLMultiRenderTarget.prototype = Object.create( WebGLRenderTarget.prototype );
WebGLMultiRenderTarget.prototype.constructor = WebGLMultiRenderTarget;

WebGLMultiRenderTarget.copy = function ( source ) {

WebGLRenderTarget.prototype.copy.call( this, source );

	this.attachments = source.attachments.map(function ( attachment ) {
		return attachment.clone();
	});

	return this;
};