arr = []
input = 0
check = "Isev"
puts("Enter 'DONE' if you are done")
while check != "DONE"
	input = gets()
	check = input.chomp
	if check != "DONE"
		arr.push(input)
		end
end
puts(arr)


