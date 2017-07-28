puts("Put in a number to find the max square")
square = gets()

def square_nums(num) 
	side = 1
	count = 0
	total = 0
	while total < num
		total = side * side
		count = count + 1
	end
	puts(count)
end



question = square.to_i
square_nums(question)
