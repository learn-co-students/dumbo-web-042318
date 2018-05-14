require 'pry'

class AppShark
  def call(environment_hash)
    # environment is the context of a request

    binding.pry

    status_code = 200 # OK
    headers = {} # meta-information about req or resp
    body = ['hello, world!'] # or {}, eventually our HTML

    return [status_code, headers, body]
  end
end
