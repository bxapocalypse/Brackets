const fadeImgInObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketImg = entry.target.querySelector('.brackets__bracket__image');

        if (entry.isIntersecting) {
            bracketImg.classList.add('fadeImgIn');
            return;
        }

        bracketImg.classList.remove('fadeImgIn');
    });
});

fadeImgInObserver.observe(document.querySelector('.brackets'));







const fadeImgInObserverTwo = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketImg = entry.target.querySelector('.brackets__bracket__two__image');

        if (entry.isIntersecting) {
            bracketImg.classList.add('fadeImgIn');
            return;
        }

        bracketImg.classList.remove('fadeImgIn');
    });
});

fadeImgInObserverTwo.observe(document.querySelector('.brackets'));




const fadeImgInObserverThree = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketImg = entry.target.querySelector('.brackets__bracket__three__image');

        if (entry.isIntersecting) {
            bracketImg.classList.add('fadeImgIn');
            return;
        }

        bracketImg.classList.remove('fadeImgIn');
    });
});

fadeImgInObserverThree.observe(document.querySelector('.brackets'));






const fadeImgInObserverFour = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketImg = entry.target.querySelector('.brackets__bracket__four__image');

        if (entry.isIntersecting) {
            bracketImg.classList.add('fadeImgIn');
            return;
        }

        bracketImg.classList.remove('fadeImgIn');
    });
});

fadeImgInObserverFour.observe(document.querySelector('.brackets'));







const fadeImgInObserverFive = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketImg = entry.target.querySelector('.brackets__bracket__five__image');

        if (entry.isIntersecting) {
            bracketImg.classList.add('fadeImgIn');
            return;
        }

        bracketImg.classList.remove('fadeImgIn');
    });
});

fadeImgInObserverFive.observe(document.querySelector('.brackets'));




const fadeHeaderin = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketHeader = entry.target.querySelector('.bracket-header');

        if (entry.isIntersecting) {
            bracketHeader.classList.add('fadeImgIn');
            return;
        }

        bracketHeader.classList.remove('fadeImgIn');
    });
});

fadeHeaderin.observe(document.querySelector('.brackets'));




















const bracketOneObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketOne = entry.target.querySelector('.brackets__bracket__one');

        if (entry.isIntersecting) {
            bracketOne.classList.add('tumble-bracket');
            return;
        }

        bracketOne.classList.remove('tumble-bracket');
    });
});

bracketOneObserver.observe(document.querySelector('.brackets'));






const bracketTwoObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketOne = entry.target.querySelector('.brackets__bracket__two');

        if (entry.isIntersecting) {
            bracketOne.classList.add('tumble-bracket-two');
            return;
        }

        bracketOne.classList.remove('tumble-bracket-two');
    });
});

bracketTwoObserver.observe(document.querySelector('.brackets'));





const bracketThreeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketOne = entry.target.querySelector('.brackets__bracket__three');

        if (entry.isIntersecting) {
            bracketOne.classList.add('tumble-bracket-three');
            return;
        }

        bracketOne.classList.remove('tumble-bracket-three');
    });
});

bracketThreeObserver.observe(document.querySelector('.brackets'));







const bracketFourObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketOne = entry.target.querySelector('.brackets__bracket__four');

        if (entry.isIntersecting) {
            bracketOne.classList.add('tumble-bracket-four');
            return;
        }

        bracketOne.classList.remove('tumble-bracket-four');
    });
});

bracketFourObserver.observe(document.querySelector('.brackets'));








const bracketFiveObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const bracketOne = entry.target.querySelector('.brackets__bracket__five');

        if (entry.isIntersecting) {
            bracketOne.classList.add('tumble-bracket-five');
            return;
        }

        bracketOne.classList.remove('tumble-bracket-five');
    });
});

bracketFiveObserver.observe(document.querySelector('.brackets'));
