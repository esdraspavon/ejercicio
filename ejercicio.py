string = input("Ingrese string: ")

def determinar_valor(s):
    i = 0
    count = 0
    for l in string:
        if s == string[i:len(s)+i]:
            count+=1
        i+=1
    return ((len(s)*count))

dicc = {}
for cant in range(1, len(string) + 1):
    for i in range(len(string) + 1 - cant):
        if not dicc.get(string[i : i + cant]):
            dicc[string[i:i+cant]] = determinar_valor(string[i:i+cant])
print(max(dicc.values()))