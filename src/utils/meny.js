const menyData = [
	{
		navn: "Klassisk Falafelrull",
		price: "119",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fusercontent.one%2Fwp%2Fwww.stationenspizzeria.se%2Fwp-content%2Fuploads%2F2022%2F05%2F24592979-c6lhz.png%3Fmedia%3D1671298614&f=1&nofb=1&ipt=24e0982e929b6da70afeda025091225d633691bbb1917f05fee6fc9ec9c91865",
		id: "1",
		ingridients:
			"Falafel, lefse, isbergsalat, tomat, agurk, rødløk, sylteagurk, tahinidressing"
	},
	{
		navn: "Spicy Falafelrull",
		price: "125",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F86%2F94%2F26%2F86942638686fbf944881487ea6c2b66c.jpg&f=1&nofb=1&ipt=bfb3118b47452714dab0d57b87ee6c1fc3e085bc652fd47c6b3142aa763fdf67",
		id: "2",
		ingridients:
			"Falafel, lefse, isbergsalat, jalapenos, tomat, agurk, chilisaus, hvitløksdressing"
	},
	{
		navn: "Falafelrull med Halloumi",
		price: "145",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.taste.com.au%2FW5Neh7JF%2Ftaste%2F2017%2F01%2Fzucchini-and-haloumi-falafel-rolls_r-119978-1.jpg&f=1&nofb=1&ipt=ed818701e37fe00fac727a1e516b9baf232d814cb7d4fbad470f112fe08f5fe1",
		id: "3",
		ingridients:
			"Falafel, grillet halloumi, lefse, salat, tomat, agurk, rødløk, hvitløksdressing"
	},
	{
		navn: "Vegan Spesial Rull",
		price: "139",
		picture:
			"https://www.hauteandhealthyliving.com/wp-content/uploads/2022/01/Falafel-Wrap-with-hummus-8.jpg",
		id: "5",
		ingridients:
			"Falafel, hummus, lefse, ruccola, granateplekjerner, agurk, tomat, vegansk dressing"
	},
	{
		navn: "Ekstra Stor Falafelrull",
		price: "159",
		picture:
			"https://www.vibrantplate.com/wp-content/uploads/2019/09/Falafel-01.jpg",
		id: "6",
		ingridients:
			"Ekstra falafel (6 stk), lefse, isbergsalat, tomat, agurk, rødløk, valgfri dressing"
	},
	{
		navn: "Falafeltallerken",
		price: "179",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.ZOJ56hq1vkkRwj0fmsTe4AHaEK%3Fpid%3DApi&f=1&ipt=00fa9df5edf7d3a12115ea3f40000b0911a27cbb493c33f03f15841db31aef12&ipo=images",
		id: "7",
		ingridients:
			"Falafel (6 stk), pommes frites eller ris, frisk salat, hummus, pitabrød, hvitløksdressing"
	},
	{
		navn: "Liten Falafeltallerken",
		price: "149",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.takeaway.com%2Fimages%2Frestaurants%2Fdk%2FR5Q0P1QN%2Fproducts%2Fdk_9386953_miloshawarma_food_kubeh_tallerken_1x1.png&f=1&nofb=1&ipt=a05c058e986913ba276bf90fe1b5df1916b07fc44e793c0e4632106060c779fb",
		id: "8",
		ingridients:
			"Falafel (4 stk), halv porsjon pommes frites, salat, tahini"
	},
	{
		navn: "Falafel & Halloumi Tallerken",
		price: "199",
		picture:
			"https://media.hellofresh.com/q_100,w_3840,f_auto,c_limit,fl_lossy/recipes/image/HF_Y25_R49_W41_UK_V46387-3_Main_V46387-AP-1-1_var_high-5b5bc395.jpg",
		id: "9",
		ingridients:
			"Falafel (4 stk), grillet halloumi (4 skiver), bulgur, salat, tzatziki, pitabrød"
	},
	{
		navn: "Meze Tallerken",
		price: "210",
		picture:
			"https://matpaabordet.no/wp-content/uploads/2015/02/IMG_9201.jpg",
		id: "10",
		ingridients:
			"Falafel, hummus, baba ganoush, tabbouleh, oliven, fetaost, pitabrød"
	},
	{
		navn: "Klassisk Falafel i Pita",
		price: "109",
		picture:
			"https://sixhungryfeet.com/wp-content/uploads/2022/08/Falafel-Pita-Sandwich-2.jpg",
		id: "11",
		ingridients:
			"Falafel, ferskt pitabrød, salat, tomat, agurk, tahini"
	},
	{
		navn: "Falafelsalat",
		price: "155",
		picture:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjO9MxkCrjHgKwa8nwIytBUz6hOQKmBz0LwbboJOM7MA&s=10",
		id: "14",
		ingridients:
			"Falafel (5 stk), blanda salat, cherrytomater, agurk, reddik, fetaost, vinaigrette"
	},
	{
		navn: "Fattoush Salat med Falafel",
		price: "165",
		picture:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl0ypbou62RnUufV98X9WXg2dWhGJoJ4xThlG21JC9lg&s=10",
		id: "15",
		ingridients:
			"Falafel, romanosalat, tomat, agurk, reddik, mynte, sprøstekt pitabrød, sumak-dressing"
	},
	{
		navn: "Falafel Baller (3 stk)",
		price: "39",
		picture:
			"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fthree-falafel-balls-isolated-white-background_849973-53.jpg%3Fw%3D740&f=1&nofb=1&ipt=f6e329c12ece16b52481860c0ff23d23821916408e4812f7f72d79a0e412b2f8",
		id: "23",
		ingridients: "Kikerter, urter, krydder"
	},
	{
		navn: "Barnemeny: Liten Falafel",
		price: "99",
		picture:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbLwXD2lf7v0mM3mrvU21CL66a6Z5QsCTY83xhkh_0uRR13HszHEjUUHc&s=10",
		id: "24",
		ingridients:
			"Liten pitabrød med 3 falafel, salat, rømmedressing, og liten valgfri drikke"
	},
	{
		navn: "Falafel Wrap",
		price: "149",
		picture:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3JTb8Hv7XevEiUQvvRz5wkYpLREdpxQJyf3O7_CnxA&s=10",
		id: "25",
		ingridients:
			"Falafel, lefse, isbergsalat, tomat, agurk, rødløk, sylteagurk, tahinidressing"
	},
	{
		navn: "Ekstra Sterk Falafel",
		price: "169",
		picture:
			"https://shared.cdn.smp.schibsted.com/v2/images/2d43c591-bebc-422a-aed4-c6a48ca3c20c?fit=crop&format=auto&h=1125&w=2000&s=4889a9e6857b7778e3f220685fc9f31fd79a139b",
		id: "26",
		ingridients:
			"Falafel, Habanero-saus, lefse, isbergsalat, tomat, agurk, rødløk, sylteagurk, tahinidressing"
	}
];

export default menyData;