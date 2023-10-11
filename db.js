class db {
    constructor(username, culture) {
        this.username = username;
        this.culture = culture;
        this.data = {
            user: "anil",
            pass: "123",
            updt: "2023-10-05 21:04:00",
            list: [112, 104, 101, 108, 106, 103, 107, 109, 110, 111, 105, 102]
        };
        this.modalText = "";
        this.modalClose = db.i18n[this.culture].close;
    }

    static episodes = [
        { id: 101, name: "S1.E1 Kokariç", imdb: "Jan 1, 2021 - Nobody has to trade if they don't want to. A person is a person if he does not feel obliged to open a kokorec shop. There cannot be such an obligation.", src: "MV5BYzZlMjdjY2QtNTg4Yi00MGQ3LTliZTUtZTc0Nzg5YjE5ZWIxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UY281_CR0,0,500,281_" },
        { id: 102, name: "S1.E2 Vatka", imdb: "Jan 14, 2021 - A movie from the 80s drags the group into a fashion debate crisis, and it pushes Yilmaz to stand behind his own opinion.", src: "MV5BYmJlNTU2NGYtMjNmMi00NzczLTkwZWYtZWI4MDRkMjcyOGQ0XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,6,500,281_" },
        { id: 103, name: "S1.E3 Nü Model", imdb: "Jan 21, 2021 - The naked story of the old Abidin who confronts his entire family.", src: "MV5BYWQwMDE1ZmItOWQ5ZC00MWE4LWE1ZjgtMzkyYzdhODg2NDNiXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,1,500,281_" },
        { id: 104, name: "S1.E4 Erasmus'la Gelen Yamyam", imdb: "Jan 28, 2021 - Ersoy's grandmother dies due to an unfortunate situation, the group stands by Ersoy to support him emotionally.", src: "MV5BNGExOTMwYzctMjY5My00NjA5LWIwNzYtMTM3OGJlMzNhNDY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 105, name: "S1.E5 Yanlış Mentor", imdb: "Feb 5, 2021 - An old and wise man saves Yilmaz from a dangerous situation, Yilmaz realises there there can be lot to learn from him and makes him his mentor.", src: "MV5BYTViMDllNmEtYjc0OC00NzUxLTk5OWMtMzE5ZTA5YmQ0MDI1XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 106, name: "S1.E6 Karanlık Güç", imdb: "Feb 12, 2021 - Ilkkan and Yilmaz attend the apartment management meeting to fight a dark force awakening in their neighborhood.", src: "MV5BZTcyMTFiN2ItNjcxZS00YmY5LTkyYWYtZTczNmUxYTYwYTY5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 107, name: "S1.E7 İkinci Yol", imdb: "Feb 19, 2021 - The loss of Ilkkan's grandmother opens a veil of secrecy about his family, Ilkkan decides to make an investigation about who he really is", src: "MV5BNzMyOGI1Y2QtMTYyOS00MGNjLWFlNDYtZTgxOTdkOWJlM2MyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 108, name: "S1.E8 Badana", imdb: "Feb 26, 2021 - Ilkkan and Yilmaz paints the walls of their houses. They will regret it.", src: "MV5BZmRlNTdkNjctMzkyMC00Y2Q2LWE5Y2QtZjZhMGExODVkMzFkXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 109, name: "S1.E9 Ayırtma Yenilemesi", imdb: "Mar 5, 2021 - There is nothing that Ilkkan cannot do to avoid losing his lover.", src: "MV5BMmY5ODQ5NzUtOGI1NC00YTdmLTgzODUtZDcxMDBmODllMWRmXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 110, name: "S1.E10 Kan Parası", imdb: "Mar 12, 2021 - Yilmaz and Ilkkan get into debt to an interesting family.", src: "MV5BMmU3NTUxMTUtMzM4MS00ZjQ1LTkyYzEtY2ZhZmM4NDhkYjU2XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 111, name: "S1.E11 Yılmaz Bey Banyo", imdb: "Mar 19, 2021 - Yilmaz wants to help old people in a way others cannot.", src: "MV5BMWFmNGQ1YjYtMWU2MC00ZmQ3LWFkYzctM2U1M2QwMDc3ZjQzXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,0,500,281_" },
        { id: 112, name: "S1.E12 Atın Bulunuşu", imdb: "Mar 26, 2021 - A small tribe living in Central Asia encounters a wild creature they have never encountered before. Only their Hakan(Khan) can lead them into the true path of salvation", src: "MV5BOGExMWE0NWYtMmEwYy00Yjc0LWE3YTktMjYyMzY4ZDk5ZjFmXkEyXkFqcGdeQXVyMTMwNjgxMTc5._V1_QL75_UX500_CR0,16,500,281_" },
        { id: 201, name: "S2.E1 Vücutçu Yalvaç", imdb: "Dec 31, 2021 - Ilkkan's nephew Yalvaç pays a visit to him. But the bodybuilding lifestyle of Yalvaç creates problems and controversies both in the group and in the neighborhood.", src: "MV5BMDcyMGMyODItYTNkYy00OTA1LTk1NWUtODQzYThhOTc4MTI4XkEyXkFqcGdeQXVyMTMwNjgxMTc5._V1_QL75_UX500_CR0,16,500,281_" },
        { id: 202, name: "S2.E2 Kuki", imdb: "Jan 7, 2022 - Yilmaz and Ersoy start a charity campaign in the neighborhood to do a favor for a disabled child, Ilkkan gets into trouble to get rid of his debts and asks the group for help.", src: "MV5BMDllMjAzY2QtNWFmNC00ZDM2LWFmMDgtNmFhYTkzMGJmOGFlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,4,500,281_" },
        { id: 203, name: "S2.E3 Bej", imdb: "Jan 14, 2022 - The group tries to help Yilmaz's nephew Kutay get the role he wants in a play.", src: "MV5BNDU2OTkxZTgtNWE5OC00ZTNmLTgxN2QtYjczMGIzYmFlN2FlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 204, name: "S2.E4 Sokak Röportajı", imdb: "Jan 21, 2022 - Yilmaz, Ilkkan, and Ersoy get in trouble for something Yilmaz said and they try to flee the city.", src: "MV5BN2ZlZjQzYjgtMGI2OS00ZDI5LThiNjctMTdiNDA4ZjE3NTM1XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UY281_CR0,0,500,281_" },
        { id: 205, name: "S2.E5 Çaça ve Cosplay", imdb: "Jan 28, 2022 - Yilmaz finds it strange what Ilkkan and Ersoy do under the influence of their girlfriends.", src: "MV5BZjFlOTc5YTAtZDljNS00MTU3LTg1ZDQtZGJkMzlhNzMyMTVlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 206, name: "S2.E6 İki İçi Dışı Bir Kişi", imdb: "Feb 4, 2022 - When Ersoy's shoot-from-the-hip uncle starts causing mayhem both in the group and in the neighborhood, Yilmaz and Ilkkan summons an old friend for help.", src: "MV5BOGIxNmNmYWQtYTg4MS00MjhhLWJlYTctMzVjMjg3ZjA0NTUzXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 207, name: "S2.E7 Gelin Başı", imdb: "Feb 11, 2022 - Yilmaz and Ilkkan get competitive about helping their friend Ersoy show-off at a wedding.", src: "MV5BNzNjZGIxYWItM2NjNC00YjQ0LTlmNTUtODIxODJmZTUwNjk3XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 208, name: "S2.E8 Resimdeki Ünlü", imdb: "Feb 18, 2022 - Ilkkan solves a puzzle, in which the name of a child celebrity is asked. Ilkkan, Yilmaz and Ersoy are trying to find out who this person is.", src: "MV5BMWVlNDZjNjEtZTE4YS00MTYyLWEyMTEtOWM0YWMyMmUxNjhlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 209, name: "S2.E9 Eşref Hidayet Gürdal", imdb: "Feb 25, 2022 - Ilkkan and Yilmaz are locked in a room of a cultural center with a dance team, waiting to be rescued.", src: "MV5BNzZjY2M2YzQtZDU1Mi00ZDc5LTk2OTctMDBhOTZmNWUwMzc3XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" },
        { id: 210, name: "S2.E10 Vita Brevis", imdb: "Mar 4, 2022 - While the Senate of the Roman Republic is prosecuting a senator declared a traitor by the Emperor, one of the senators unintentionally finds a new method of execution.", src: "MV5BYThkNWE4NDEtZTQ5NC00YjcxLThkMzMtMzk3ZjRhMmI4MmFlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UY281_CR0,0,500,281_" },
        { id: 301, name: "S3.E1 Sarışın ve Kotlu", imdb: "Oct 21, 2022 - Yilmaz, Ilkkan and Ersoy become matchmakers for their desperate friend, eventually finding themselves in a series of unexpected events.", src: "MV5BOGU2YWU3ODAtZjgyNy00YTNhLWE2YzUtMDliOWYwZWU3YmZhXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,142,500,281_" },
        { id: 302, name: "S3.E2 Keskin Nişancı", imdb: "Oct 28, 2022 - Yilmaz, Illkan and Ersoy unintentionally interfere a police operation, then dedicate themselves to solve the case.", src: "MV5BNzczOWZhNDEtZTVjOC00YjI5LWI3MTYtOTJhYTE2M2RjZWM1XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,129,500,281_" },
        { id: 303, name: "S3.E3 Büfe", imdb: "Nov 4, 2022 - Yilmaz, Illkan and Ersoy try to help a friend for transportation of an opulent and timeless dresser to a small town.", src: "MV5BNjIwZmE0ZTEtNWE0MS00NzMzLWJjMDQtZmU4ZDk0NjkzYzdlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,146,500,281_" },
        { id: 304, name: "S3.E4 Sınıfsal Veda", imdb: "Nov 11, 2022 - Yilmaz, Ilkkan and Ersoy try to catch up with the new life style of their close friend.", src: "MV5BZDg5ZmZmNDMtYTU1NS00MWE2LTk3YTQtNzllYmY0MTRmMDllXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,131,500,281_" },
        { id: 305, name: "S3.E5 Mazbut Bir Hayat Sağlam Bir Ahlak Bol Bol Sevgi", imdb: "Nov 18, 2022 - Yilmaz and Ersoy struggle to put together a dinner table before Ilkkan's guests arrive.", src: "MV5BNDkzMDljMmQtZTU5Ni00ZGY5LWI1ZGQtOTg3ZTY4NWY0MWJlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UY281_CR0,0,500,281_" },
        { id: 306, name: "S3.E6 Ghosting", imdb: "Nov 25, 2022 - Yilmaz finds a DVD in trash and gets to the bottom of it.", src: "MV5BNTcxMDlmMjItM2MyNC00ZWVjLWJmMjEtOTgwY2MxNDc2MWQ2XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,159,500,281_" },
        { id: 307, name: "S3.E7 Teşekkürler", imdb: "Dec 2, 2022 - Yilmaz, Ilkkan and Ersoy help their actor friend on his new movie.", src: "MV5BMjljNzY2YTctMGMxZS00NDcwLWJmYjEtMTNlZDJlMDk4NWFlXkEyXkFqcGdeQXVyMzI3NjkxMTA@._V1_QL75_UX500_CR0,185,500,281_" },
        { id: 308, name: "S3.E8 Gülnuray", imdb: "Dec 9, 2022 - The strange tale of the relationship between Yilmaz and Gulnuray, the housekeeper.", src: "MV5BYjNhYzhkNTUtOTNlYi00ZjZlLTllMGQtNzBmNDM5YWI1YWQxXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,3,500,281_" },
        { id: 309, name: "S3.E9 Bilanço", imdb: "Dec 16, 2022 - In the night that started with the \"Bilanco\" game; Yilmaz, Ilkkan, Ersoy and their friends talk about their secrets.", src: "MV5BYzY4ZDEyYzAtYzI0Ny00MWYzLWIxOWEtOGNjYzYyN2ZlM2Q5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,83,500,281_" },
        { id: 310, name: "S3.E10 Birinci Kabak", imdb: "Dec 23, 2022 - Yilmaz, Ilkkan and Ersoy go to a fair to meet with the queen in 17th century France.", src: "MV5BZmY4MmEzMDQtNDdhYS00MzdiLThjYWItNGIwMmRlZjdjMDkwXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,47,500,281_" },
        { id: 401, name: "S4.E1 Övgü", imdb: "Mar 31, 2023 - Yilmaz and Ersoy are trying to throw a lifeline to Ilkkan, who is drowning in the whirlpool of the river of compliments.", src: "MV5BM2ExNjg1OWEtNGE3Yy00ZjAyLWE5NWEtMjMwZDUwZTFjNmJmXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,147,500,281_" },
        { id: 402, name: "S4.E2 Bin", imdb: "Apr 7, 2023", src: "MV5BYWI4MDg2YmQtNjc5MS00NDYzLWIxNjQtZjdkMDc5NGQzNTM0XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,186,500,281_" },
        { id: 403, name: "S4.E3 Orta Yaş Krizi", imdb: "Apr 14, 2023", src: "MV5BNGNkMjYwNmYtNTZkOC00ZGFkLTkyZDEtZTBjZWVmNWZjYzQ5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,130,500,281_" },
        { id: 404, name: "S4.E4 Kafa Nakli", imdb: "Apr 21, 2023", src: "MV5BNmFmZmRiYzItYWEzZi00NDJhLTllOGYtYzE2Nzg1MjFlOTcyXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,208,500,281_" },
        { id: 405, name: "S4.E5 Patern", imdb: "Apr 28, 2023", src: "MV5BNTg4Y2U1ZWUtMDdmZC00NDZlLWI1NjUtMjRmODc5NzQ2MDVlXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UY281_CR0,0,500,281_" },
        { id: 406, name: "S4.E6 165", imdb: "May 5, 2023 - Yilmaz, Ilkkan and Ersoy takes an IQ test which proves Ersoy is a genius.", src: "MV5BYzk1NzJhNzctNjllMi00MzExLTk5ZjUtOGZjYTRkMzE4YjU3XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,192,500,281_" },
        { id: 407, name: "S4.E7 Dönen Tekme", imdb: "May 12, 2023 - In order to finance Ilkkan's marriage proposal, Yilmaz, Ilkkan and Ersoy have to convince a man who can not get over the roundhouse kick he got long time ago.", src: "MV5BYTBmNjJlZDUtZmZjMC00NzQyLTliMjUtY2ZlNjBkZjlkMDljXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,216,500,281_" },
        { id: 408, name: "S4.E8 Defter", imdb: "May 19, 2023", src: "MV5BNDFhN2M3NjAtOWIyYi00MGUzLWE0MDEtZjEzNWI3YjU1Yzk4XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,58,500,281_" },
        { id: 409, name: "S4.E9 İç Mimari ve Dirty Talk", imdb: "May 26, 2023", src: "MV5BZGYwY2U5NDQtMzEyNS00ODY5LTkxZjctNmQ4MDgxZmJlZjI5XkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,243,500,281_" },
        { id: 410, name: "S4.E10 M.Ö. 2998-2997 Eğitim Öğretim Yılı", imdb: "Jun 2, 2023 - Yilmaz, a teacher in a village in ancient time Mesopotamia, tries to teach writing to the village.", src: "MV5BMWIxNmU4ZGMtYjViMi00NWIzLWFjYzYtYTkzNjgxZjY5NmJmXkEyXkFqcGdeQXVyNDg4MjkzNDk@._V1_QL75_UX500_CR0,109,500,281_" }
    ];

    static i18n = {
        trTR: {
            saveDisable: "Beklenmeyen bir hata kayıt etmeyi engelliyor!",
            saveError: "Beklenmeyen bir hata meydana geldi!",
            saveSuccess: "Kayıt edildi.",
            close: "Tamam"
        }
    }

    async GetUserList() {
        await new Promise(resolve => setTimeout(resolve, 200));
        if (this.username == "") {
            return [];
        }
        const list = this.data.list;
        db.episodes.forEach(element => {
            if (!list.includes(element.id)) {
                list.push(parseInt(element.id));
            }
        });
        return JSON.parse(JSON.stringify(db.episodes)).sort(function (a, b) {
            return list.indexOf(a.id) - list.indexOf(b.id);
        });
    }

    async SaveUserList(userList) {
        if (userList.length != db.episodes.length) {
            return this.modalText = db.i18n[this.culture].saveDisable;
        }
        try {
            this.data.list = userList;
            await new Promise(resolve => setTimeout(resolve, 200));
            await this.GetHallOfFame();
            this.modalText = db.i18n[this.culture].saveSuccess;
        } catch (error) {
            this.modalText = `${db.i18n[this.culture].saveError}<br /><i style="display: none;">${error}</i>`;
        }
    }

    async GetHallOfFame() {
        await new Promise(resolve => setTimeout(resolve, 200));
        const hallOfFame = {};

        db.episodes.forEach(element => {
            hallOfFame[element.id] = 0;
        });

        const list = this.data.list;
        let point = 0;
        list.forEach(element => {
            hallOfFame[element] = hallOfFame[element] + ++point;
        });

        let topList = [];
        for (const prop in hallOfFame) {
            topList.push({ id: prop, rank: hallOfFame[prop] });
        }

        topList = topList.sort((a, b) => a.rank - b.rank);

        for (let i = 0; i < 3; i++) {
            db.episodes.forEach(element => {
                if (element.id == topList[i].id) {
                    console.log(`${i + 1} - ${element.name}`);
                }
            });
        }
    }
}

// class SortableItem extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML = `<img src="https://m.media-amazon.com/images/M/${this.getAttribute('ssrc')}.jpg" loading="lazy" alt="" onerror="this.src='error.jpg'" class="img-banner">
// <span class="rank text-secondary">${this.getAttribute('srank')}</span><span class="season">${this.getAttribute('sseason')}</span>
// <h5>${this.getAttribute('sname')}</h5><p>${this.getAttribute('sinfo')}</p>`;
//     }
// }

// customElements.define("sortable-item", SortableItem);
