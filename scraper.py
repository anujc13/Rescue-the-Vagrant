import requests
from bs4 import BeautifulSoup

URL = 'https://www.homelessshelterdirectory.org/newjersey.html'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

results = soup.find(id='triple')

list1 = []
for link in results.findAll('a'):
    list1.append(link.get('href'))

listX = []
names = []
address = []
all_items = []
names_address = []
for city in list1:
    site = requests.get(city)
    bs = BeautifulSoup(site.content, 'html.parser')
    listings = bs.find('div', class_='listings')
    result = listings.findAll('div', class_='item_content')
    for item in result:
        listX.append(item.find('a').text)
        item_text = item.text.split('\n')
        item_text[2] = item_text[2].strip()
        names = item_text[0]
        address = item_text[2]
        description = item_text[3]
        print(item_text[1:3])


