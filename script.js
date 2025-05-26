const nav_helper = document.getElementById("navbar_helper");

const nav = document.getElementById('nav_interface');

window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    
});


  const letters = document.querySelectorAll('#big_name_interface span');
  let index = 0;
  let forward = true;

  function toggleGlow() {
    // إزالة كل glow
    letters.forEach(el => el.classList.remove('glow'));

    // تطبيق glow تدريجياً
    if (forward) {
      for (let i = 0; i <= index; i++) {
        letters[i].classList.add('glow');
      }
    } else {
      for (let i = index; i < letters.length; i++) {
        letters[i].classList.remove('glow');
      }
    }

    // تغيير الاتجاه إذا وصلنا لنهاية أو بداية
    if (forward) {
      index++;
      if (index === letters.length) {
        index = letters.length - 1;
        forward = false;
      }
    } else {
      index--;
      if (index < 0) {
        index = 0;
        forward = true;
      }
    }
  }

  setInterval(toggleGlow, 800); // كل 200ms خطوة

  const ctx = document.getElementById('myPieChart').getContext('2d');
  const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['MYSQL', 'PHP', 'JAVA SCRIPT', 'CSS', 'HTML', "REACT", "Laravel"],
      datasets: [{
        label: 'Skill Power',
        data: [1000, 500, 6000, 8000, 8000, 7000, 7000],
        backgroundColor: [
          'rgba(0, 206, 209, 0.7)',
          'rgba(255, 165, 0, 0.7)',
          'rgba(255, 255, 0, 0.7)',
          'rgba(255, 99, 132, 0.7)',
          'rgba(255, 218, 185, 0.7)'
        ],
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 20 // 👈 هذا يجعل الجزء يكبر عند الهوفر
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        },
        title: {
          display: true,
          text: 'My Skills Power In Languages'
        }
      }
    }
  });
  

  var chartDom = document.getElementById('main_interface_chart');
  var myChart = echarts.init(chartDom, 'dark');
  var option;

  option = {
    backgroundColor: 'transparent', // ← هنا تغيّر لون الخلفية


    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Laravel', 'React', 'Mysql', 'Bootstrap', 'PHP']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['2020', '2021', '2022', '2023', '2024', '2025', '2026']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      { name: 'Laravel', type: 'line', stack: 'Total', data: [100, 40, 100, 100, 300, 1050, 2010] },
      { name: 'React', type: 'line', stack: 'Total', data: [220, 182, 191, 234, 290, 330, 310] },
      { name: 'Mysql', type: 'line', stack: 'Total', data: [150, 232, 201, 20, 190, 1030, 410] },
      { name: 'Bootstrap', type: 'line', stack: 'Total', data: [1500, 332, 301, 3334, 390, 330, 320] },
      { name: 'PHP', type: 'line', stack: 'Total', data: [820, 932, 2001, 934, 590, 1330, 1320] }
    ]
  };

  option && myChart.setOption(option);


  document.addEventListener('DOMContentLoaded', function() {
    new Splide('#cards_interface', {
      type    : 'slide',
      perPage : 3,
      gap     : '250px',
      arrows  : true,
      pagination: true,
      breakpoints: {
        1024: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      }
    }).mount();
  });





  const burgerMenu = document.getElementById("burger_menu_nav");
  
  const burger1 = document.querySelector(".part_burger_nav_one");
  const burger2 = document.querySelector(".part_burger_nav_two");
  const burger3 = document.querySelector(".part_burger_nav_three");
  
  burgerMenu.addEventListener('click', () => {
    burger2.classList.toggle("ActiveBrgr2");
    burger1.classList.toggle("ActiveBrgr1");
    burger3.classList.toggle("ActiveBrgr3");
    nav_helper.classList.toggle("ActiveNav");

    if (nav_helper.classList.contains("ActiveNav")) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');

    }

  });
  