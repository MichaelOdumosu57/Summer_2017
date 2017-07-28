arr = []
input = 0
check = "Isev"
sum = 0
puts("Enter 'DONE' if you are done")
while check != "DONE"
	input = gets()
	check = input.chomp
	if check != "DONE"
		arr.push(input)
		end
end


def crazy_sum(jumble, total)
	counter = 1
	puts(jumble.length)
	while counter != jumble.length
		total = total + ( counter * jumble[counter].to_i)
		counter = counter + 1
		puts("totoal so far")
		puts(total)
		puts("counter")
		puts(counter)
		end
	puts(total)
end
puts("this is the answer")
crazy_sum(arr,sum)
