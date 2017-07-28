puts("Type in a number")
num = gets.to_i

if num < 10
  puts("That's not a big number!")
elsif num < 100
  puts("That's a pretty big number")
elsif num < 1000
  puts("Wow that's a large number")
else
  puts("Holy cow, that number is blowing my mind")
end

puts("Thanks for typing in a number!")
