Outline

15m Create a new application
  * rails g model cheese name:string age:integer color:string
  * rails g migration CreateCheeses name:string age:integer color:string
  * rails create file for controller and build out manually to show multiple ways of doing things

  * Use rails new && rails g model, g migration
  * Define model

15m REST
  * actions
  * focus on index/new to start

  * Draw routes
  * build routes out with standard verb and actions, show the aliasing
  * then: use resources, but show custom routing example
  * Rake Routes to show what's available as we go

  * make a view for new

30m building forms in rails html, form_tag, form_for
  * build form with html first
  * don't use authenticity token -- get the error
  * use hidden inputs to add security

  * introduce form_tag
  * what is it?
    * combo of helper methods & html elements
  * default method is post!!!

  * what html does it create?
  * form_tag(url_for_options = {}, options = {})
  * look at form_tag docs in rails -- show the field options

  * url path_helpers

  * strong params
    * params permissions
  * private methods

  * csrf authenticity token // will be in params
  * security measures in rails
  * how does this differ from Sinatra??

  Cross-Site Request Forgery (CSRF) -- malicious attacks to spoof requests
  Rails generates tokens to authenticate and validate each submission

  * // <input type="hidden" name="authenticity_token">
  * // protect_from_forgery with: :exception
  * // <%= csrf_meta_tags %>


===

60m Total
