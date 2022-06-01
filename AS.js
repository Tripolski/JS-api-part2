const table = $('.mydatatable').DataTable();
const requestURL = 'https://apidata.mos.ru/v1/datasets/2601/rows?&api_key=6504f4ccfc89283836f726f5ef37c2e6'

const elements = [
	{
		element: document.querySelector('#one'),
		filterByKey: 'Электрооборудование'
	},
	{
		element: document.querySelector('#two'),
		filterByKey: 'Электронная промышленность'
	},
	{
		element: document.querySelector('#three'),
		filterByKey: 'Целлюлозно-бумажная промышленность' && 'целлюлозно-бумажная промышленность'
	},
	{
		element: document.querySelector('#four'),
		filterByKey: 'Целлюлозно-бумажная'
	},
	{
		element: document.querySelector('#five'),
		filterByKey: 'электронная промышленность'
	},
	{
		element: document.querySelector('#six'),
		filterByKey: 'хлебопекарная'
	},
	{
		element: document.querySelector('#seven'),
		filterByKey: 'Химическая промышленность'
	},
	{
		element: document.querySelector('#eight'),
		filterByKey: 'Фармацевтическая промышленность'
	},
	{
		element: document.querySelector('#nine'),
		filterByKey: 'химическая'
	},
	{
		element: document.querySelector('#ten'),
		filterByKey: 'фармацевтическая'
	},
	{
		element: document.querySelector('#elevan'),
		filterByKey: 'Транспортное машиностроение'
	},
	{
		element: document.querySelector('#twelve'),
		filterByKey: 'Топливно-энергетическое машиностроение'
	},
	{
		element: document.querySelector('#threeteen'),
		filterByKey: 'Текстильная'
	},
	{
		element: document.querySelector('#fourteen'),
		filterByKey: 'Судостроение'
	},
	{
		element: document.querySelector('#fiveteen'),
		filterByKey: 'Строительная'
	},
	{
		element: document.querySelector('#sixteen'),
		filterByKey: 'Станкоинструментальная промышленность'
	},
	{
		element: document.querySelector('#seventeen'),
		filterByKey: 'Специальное машиностроение (в т.ч. пищевое, стройдор, сельхоз)'
	},
	{
		element: document.querySelector('#eightteen'),
		filterByKey: 'Резиновая и пластмассовая'
	},
	{
		element: document.querySelector('#nineteen'),
		filterByKey: 'Ракетно-космическая промышленность'
	},
	{
		element: document.querySelector('#twenty'),
		filterByKey: 'Радиоэлектронная промышленность'
	},
	{
		element: document.querySelector('#twentyone'),
		filterByKey: 'Радиоэлектроника'
	},
	{
		element: document.querySelector('#twentytwo'),
		filterByKey: 'Радиопромышленность'
	},
	{
		element: document.querySelector('#twentythree'),
		filterByKey: 'прочие пищевые продукты'
	},
	{
		element: document.querySelector('#twentyfour'),
		filterByKey: 'Прочее'
	},
	{
		element: document.querySelector('#twentyfive'),
		filterByKey: 'промышленность строительных материалов'
	},
	{
		element: document.querySelector('#twentysix'),
		filterByKey: 'Производство ювелирных изделий и аналогичных изделий'
	},
	{
		element: document.querySelector('#twentyseven'),
		filterByKey: 'Производство строительных материалов'
	},
	{
		element: document.querySelector('#twentyeight'),
		filterByKey: 'Производство прочих товаров народного потребления'
	},
	{
		element: document.querySelector('#twentynine'),
		filterByKey: 'Производство растительных и животных масел и жиров'
	},
	{
		element: document.querySelector('#thirty'),
		filterByKey: 'Производство пластмассовых изделий'
	},
	{
		element: document.querySelector('#thirtyone'),
		filterByKey: 'Производство оружия и боеприпасов'
	},
	{
		element: document.querySelector('#thirtytwo'),
		filterByKey: 'производство напитков'
	},
	{
		element: document.querySelector('#thirtythree'),
		filterByKey: 'производство красок'
	},
	{
		element: document.querySelector('#thirtyfour'),
		filterByKey: 'Производство изделий из пластмасс'
	},
	{
		element: document.querySelector('#thirtyfive'),
		filterByKey: 'Приборостроение и электроника'
	},
	{
		element: document.querySelector('#thirtysex'),
		filterByKey: 'Полиграфическая деятельность'
	},
	{
		element: document.querySelector('#thirtyseven'),
		filterByKey: 'полиграфическая'
	},
	{
		element: document.querySelector('#thirtyeight'),
		filterByKey: 'Пищевая промышленность'
	},
	{
		element: document.querySelector('#thirtynine'),
		filterByKey: 'Пищевая'
	},
	{
		element: document.querySelector('#fourty'),
		filterByKey: 'Оружие и боеприпасы'
	},
	{
		element: document.querySelector('#fourtyone'),
		filterByKey: 'Нефтеперерабатывающая промышленность'
	},
	{
		element: document.querySelector('#fourtytwo'),
		filterByKey: 'Неметаллическая минеральная продукция'
	},
	{
		element: document.querySelector('#fourtythree'),
		filterByKey: 'Научная деятельность'
	},
	{
		element: document.querySelector('#fourtyfour'),
		filterByKey: 'Мясоперерабатывающая'
	},
	{
		element: document.querySelector('#fourtyfive'),
		filterByKey: 'молокопереработка'
	},
	{
		element: document.querySelector('#fourtysex'),
		filterByKey: 'Микроэлектроника'
	},
	{
		element: document.querySelector('#fourtyseven'),
		filterByKey: 'Металлургия и металлообработка'
	},
	{
		element: document.querySelector('#fourtyeight'),
		filterByKey: 'Металлургическая промышленность'
	},
	{
		element: document.querySelector('#fourtynine'),
		filterByKey: 'Металлообработка'
	},
	{
		element: document.querySelector('#fifty'),
		filterByKey: 'Медицинская промышленность'
	},
	{
		element: document.querySelector('#fiftyone'),
		filterByKey: 'Машиностроение'
	},
	{
		element: document.querySelector('#fiftytwo'),
		filterByKey: 'Легкая промышленность'
	},
	{
		element: document.querySelector('#fiftythree'),
		filterByKey: 'кондитерская промышленность'
	},
	{
		element: document.querySelector('#fiftyfour'),
		filterByKey: 'Кабельная промышленность'
	},
	{
		element: document.querySelector('#fiftyfive'),
		filterByKey: 'Информационные технологии'
	},
	{
		element: document.querySelector('#fiftysex'),
		filterByKey: 'Издательство'
	},
	{
		element: document.querySelector('#fiftyseven'),
		filterByKey: 'Деревообработка'
	},
	{
		element: document.querySelector('#fiftyeight'),
		filterByKey: 'Деревообрабатывающая'
	},
	{
		element: document.querySelector('#fiftynine'),
		filterByKey: 'Атомная промышленность'
	},
	{
		element: document.querySelector('#sixty'),
		filterByKey: 'Аренда'
	},
	{
		element: document.querySelector('#sixtyone'),
		filterByKey: 'Автомобильная промышленность'
	},
	{
		element: document.querySelector('#sixtytwo'),
		filterByKey: 'Автомобильная промышленность'
	},
	{
		element: document.querySelector('#sixtythree'),
		filterByKey: 'Авиационная промышленность'
	},
]

function sendRequest(url) {
	console.log('sending')
	return fetch(url).then(response => response.json())
}

function filterBy(array, key) {
	return array.filter(item => item.Cells.Specialization === key)
}

sendRequest(requestURL)
	.then(data => {
		elements.forEach(item => {
			const filteredData = filterBy(data, item.filterByKey)
			item.element.innerText = filteredData.length+1
		})
	})
	.catch(err => console.log(err))