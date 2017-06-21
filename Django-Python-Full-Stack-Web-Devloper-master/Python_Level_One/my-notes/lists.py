# LISTS

my_list = ['adfsjkfdkfjdsk',1,2,3,23.2,True,'asd',[1,2,3]]
print(my_list)

# PRINTS THE LENGTH OF A LIST.
this_list = [1,2,3]
print(len(this_list))

print(my_list[0])

my_list[0] = 'NEW ITEM'
print(my_list)

# .append can add something to a list
my_list.append('another new item - append')
print(my_list)

listtwo = ['a', 'b', 'c']

# .extend adds a list to another list
my_list.extend(listtwo)
print(my_list)

# .pop returns the last item from a list
anotherlist = ['a', 'b', 'c', 'd', 'e']
item = anotherlist.pop()
# you can specify what item in the list you want taken off.
firstone = anotherlist.pop(0)
print(anotherlist)
print(item)
print(firstone)

# .reverse() reverses the items in a list
anotherlist.reverse()
print(anotherlist)

# .sort() will sort the numbers
numericallist = [4,5,7,6,3,2,4,1]
numericallist.sort()
print(numericallist)

# how to index a nested list
alphabetlist = [1,2,['x','y','z']]
print(alphabetlist[2][0])

matrix = [[1,2,3],[4,5,6],[7,8,9]]
# LIST COMPREHENSION
# row counts for each item in the list
first_col = [row[0] for row in matrix]
print(first_col)
