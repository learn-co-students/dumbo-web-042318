require "rack"
require_relative "./app"

controller_instance = AppShark.new
run(controller_instance)
# controller_instance.call(environment_hash)
