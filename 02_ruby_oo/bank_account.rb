require 'pry'

# responsibility is to contain all data and methods for bank account
class BankAccount
  attr_accessor :name
  attr_writer :pin, :balance
  attr_reader :balance

  # happens after we call BankAccount.new
    # ruby program is going to create space in memory
    # assign a variable name to that space (account)
    # call account.initialize with the arguments
    # return account
  def initialize(name = nil, balance = nil)
    @name = name
    @balance = balance
  end

  def balance
    "$#{@balance}"
  end

  def greet_customer
    # print out their balance and say their name
    puts self # the instance


    # is there a variable defined name in this local scope?
    # is there a method on the current self with this name?
    # if neither is true, throw an error
    puts "Welcome, #{name}. Your balance is #{balance}."
  end

  def instance_method
    # in an instance method, so self === instance
    puts self
  end

  @@name = 'Natalie'
  @@balance = 12341234

  # class level, self === class
  def self.create
    puts self

    # is there a variable defined name in this local scope?
    # is there a method on the current self with this name?
    # if neither is true, throw an error

    # account = self.new(@@name, @@balance)
    # account = self.new('Natalie', 12341235)
    # account = self.new(self.name=, self.balance=)
    account
  end

  # in the class scope, for each instance, create these reader methods
  # attr_reader(:name, :pin)

  # obj.name
  # reader
  # getter
  # def name
  #   @name
  # end

  # attr_writer(:name, :pin)

  # obj.name = arg
  # writer
  # setter
  # def name=(arg)
  #   @name = arg
  # end


  def open
    puts "Opened bank account"
  end
end

binding.pry
true
