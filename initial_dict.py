# how I generated js_wordhash.js from the list of words

# console_log3 contained a list of all the words
console_log = open('console_log3', 'r')
output = open('js_wordhash.js', 'w')

output.write("wordhash = {\n")
for line in console_log:
    output.write(("    "+line[20:]),)  # don't want \n
output.write("\n};")