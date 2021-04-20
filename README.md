# Scrabble Word Finder

~~http://peterweckend.com/wordfinder.html~~

Scrabble word finder that, given a set of letters, returns all words in the OSPD (from http://www.puzzlers.org/) that can be formed by rearranging some or all of the letters provided. 
At the moment, it becomes slower/unwieldy when given more than ~15 letters at a time.

### How I Made It
I wanted to try building a (relatively) more complicated Javascript/JQuery program with minimal help, and came up with the algorithms and code used here on my own. I grabbed a list of OSPD words from https://git.io/vMEAx.

I decided to try a hash table in the following way: the hash function would arrange the letters of a given string into alphabetical order and the string would be matched to that "bucket". Any words in the alphabet that could be alphabetized to that bucket would be stored there as well. 

The program uses the hash table in the following way:
Once you type in a string, it is sorted into alphabetical order. Then, the program finds the power set (minus the empty string) of your alphabetized string, and the set of alphabetized buckets is searched for every entry in the power set. The dictionary words stored at matching buckets are returned.

Unfortunately, this isn't a very optimal system, as there are thousands of buckets that only contain one word, and almost as many buckets as there are words in the dictionary. 
After I finished, I looked up some other (more efficient) strategies for implementing a word finder like this. Tries (https://en.wikipedia.org/wiki/Trie) look to be the best way of setting it up, but modifying my hash function to be less specific or perhaps hashing it a second time, as well as using dynamic programming to find all the subsets of the letters entered. I hope to try some of these out soon when I have the time. 
