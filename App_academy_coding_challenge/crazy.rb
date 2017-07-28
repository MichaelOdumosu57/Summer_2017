number = gets()

def crazy_nums(num) 
	count = 0
	by_three = 0
	by_five = 0
	arr = []
	while count != num
		by_three  = count % 3
		if by_three == 0
			by_five = count % 5
			if by_five == 0
				end
			arr.push(count)
			end
		
		count = count + 1
		end
puts(arr)
end

chain = number.to_i
crazy_nums(chain)
		
