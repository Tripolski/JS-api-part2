// Doughnut chart
var ctx = document.getElementById('myChartt').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: [
            'Электрооборудование', 
            'Электронная промышленность',
            'Целлюлозно-бумажная промышленность',
            'Целлюлозно-бумажная',
            'Хлебопекарная',
            'Химическая промышленность',
            'Фармацевтическая промышленность',
            'Химическая',
            'Фармацевтическая',
            'Транспортное машиностроение',
            'Топливно-энергетическое машиностроение',
            'Текстильная',
            'Судостроение',
            'Строительная',
            'Станкоинструментальная промышленность',
            'Специальное машиностроение (в т.ч. пищевое, стройдор, сельхоз)',
            'Резиновая и пластмассовая',
            'Ракетно-космическая промышленность',
            'Радиоэлектронная промышленность',
            'Радиоэлектроника',
            'Радиопромышленность',
            'Прочее',
            'Промышленность строительных материалов',
            'Производство ювелирных изделий и аналогичных изделий',
            'Производство строительных материалов',
            'Производство прочих товаров народного потребления',
            'Производство растительных и животных масел и жиров',
            'Производство пластмассовых изделий',
            'Производство оружия и боеприпасов'
        ],
        datasets: [{
            data: [13.93, 6.37, 0.98, 3.92, 0.98, 1.96, 14.21, 0.49, 0.98, 0.98, 1.47, 0.49, 9.31, 0.49, 9.31, 0.49, 5.39, 0.49, 10.78, 0.98, 1.96, 1.96, 7.35, 0.98, 1.96, 1.96, 0.98, 0.98],
            backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
            borderWidth: 0.5 ,
            borderColor: '#ddd'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Recommended Daily Diet',
            position: 'top',
            fontSize: 16,
            fontColor: '#111',
            padding: 20
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                boxWidth: 20,
                fontColor: '#111',
                padding: 15
            }
        },
        tooltips: {
            enabled: false
        },
        plugins: {
            datalabels: {
                color: '#111',
                textAlign: 'center',
                font: {
                    lineHeight: 1.6
                },
                formatter: function(value, ctx) {
                    return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
                }
            }
        }
    }
});