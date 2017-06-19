# STRINGS

# BASICS
# --you can either use single quotes or double quotes.
my_string = 'abcdefg'
# indexing starts with 0 in python
# supports negative indexing
print(my_string[0])

# SLICING

# what the : means is start at [2] and grab everything after that
print(my_string[2:])

# grabs everything up to that number, but not that number. (up to but not
# including index 3)
print(my_string[:3])

# how to grab starting and up unto but not including (2(first number): 5 (
# up unto) - certain amount of that string.)
print(my_string[2:5])

#grab everything
print(my_string[:])

# SKIPS EVERY 2
print(my_string[::2])

# CONVERTS ALL THE ITEMS IN THE STRING TO UPPERCASE
x = my_string.upper()
print(x)

# CONVERTS ALL STRINGS TO LOWER.
y = my_string.lower()
print(y)

# CAPITALIZES THE FIRST CHARACTER IN THE STRING
a = my_string.capitalize()
print(a)

# SPLITS ON ANYTHING YOU WANT IN A STRING
this_string = "hello world"
# splits on the letter 'e'
one = this_string.split('e')
print(one)



# -----------------------------------------------------------

# print formatting

x = "insert another string here: {}".format("INSERT ME!")
print(x)

strings = "Item One: {} Item Two: {}".format("dog", "cat")
print(strings)

# switch the order --- THIS IS HOW YOU WILL SEE IT MOST OF THE TIME
this_one = "Item One: {y} Item Two: {x}".format(x = "fish", y = "groundhog")
print(this_one)
