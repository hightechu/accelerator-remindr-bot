import requests
from bs4 import BeautifulSoup
import json

#testing function to print all the quotes
def prettyPrintQuotes(quotes):
    count = 0

    for i in quotes:
        print(i + '\n')
        count += 1

#removes unnecessary characters from the raw html
def formatQuote(raw):
    raw = str(raw)

    raw = raw.replace('<p>', '')
    raw = raw.replace('</p>', '')

    int(raw[:1])

    dot = raw.index('.') + 1
    return raw[dot:].strip()


#crawling the inspirational quote website
response = requests.get('https://www.forbes.com/sites/kevinkruse/2013/05/28/inspirational-quotes/?sh=531176c66c7a')
soup = BeautifulSoup(response.content, 'html.parser')
items = soup.findAll('p')
quotes = []

for i in items:
    try:
        quotes.append(formatQuote(i))
    except:
        pass

#the first quote is faulty for some reason
quotes.pop(0)

#printing the quotes
prettyPrintQuotes(quotes)

#dumping the quotes in a json file
with open('QuoteStorage.json','w') as file:
    json.dump(quotes, file, indent=4, sort_keys=True)
    file.close()
