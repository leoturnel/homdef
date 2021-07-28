/*!
 * Toastr - ICOCrypto v1.9.3 by Softnio.
**/
NioApp = (function (NioApp, $, window) {
    "use strict";
    
	var 
        $toastr_top_full = $('.toastr-top-full'),
        $toastr_buy = $('.toastr-buy'),
        $toastr_success = $('.toastr-success');
    
	NioApp.Toastr = {};
	
	// ToastrJs @v1.0
    NioApp.Toastr.ToastrJs = function () {
        if ($toastr_top_full.exists()) {
			$toastr_top_full.each(function(){
				var $self = $(this);
				$self.on("click", function(e){
                    toastr.clear();
                    toastr.options = {
                        "closeButton": true,
                        "newestOnTop": false,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-full-width",
                        "showDuration": "1000",
                        "hideDuration": "10000",
                        "timeOut": "2000",
                        "extendedTimeOut": "1000"
                    };
                    toastr.info('<em class="fas fa-tractor toast-message-icon"></em> Launching soon!');
                    e.preventDefault();
                });
			});
        }
        if ($toastr_success.exists()) {
			$toastr_success.each(function(){
				var $self = $(this);
				$self.on("click", function(e){
                    toastr.clear();
                    toastr.options = {
                        "closeButton": true,
                        "newestOnTop": false,
                        "preventDuplicates": true,
                        "positionClass": "toast-bottom-center",
                        "showDuration": "1000",
                        "hideDuration": "10000",
                        "timeOut": "2000",
                        "extendedTimeOut": "1000"
                    };
                    toastr.success('<em class="ti ti-check toast-message-icon"></em> Contract address copied');
                    e.preventDefault();
                });
			});
        }
        if ($toastr_buy.exists()) {
			$toastr_buy.each(function(){
				var $self = $(this);
				$self.on("click", function(e){
                    toastr.clear();
                    toastr.options = {
                        "closeButton": true,
                        "newestOnTop": false,
                        "preventDuplicates": true,
                        "positionClass": "toast-top-full-width",
                        "showDuration": "1000",
                        "hideDuration": "10000",
                        "timeOut": "2000",
                        "extendedTimeOut": "1000"
                    };
                    toastr.info('<em class="fas fa-shopping-cart toast-message-icon"></em>Fair Launch Coming Soon!');
                    e.preventDefault();
                });
			});
        }
	};
	
    NioApp.components.docReady.push(NioApp.Toastr.ToastrJs);
	return NioApp;
})(NioApp, jQuery, window);
    