export const getStockImage = async (stockCode: string): Promise<string> => { // async 키워드 추가 및 반환 타입 수정

    // 국내 주식 이미지 경로
    const domesticPath = `/assets/domestic/${stockCode}.png`; // 파일명 패턴
    const domesticImage = await findImage(domesticPath); // await 추가

    if (domesticImage) {
        return domesticImage;
    }

    // 해외 주식 이미지 경로
    const foreignPath = `/assets/foreign/${stockCode}.png`; // 파일명 패턴
    const foreignImage = await findImage(foreignPath); // await 추가

    if (foreignImage) {
        return foreignImage;
    }

    return '/assets/default-stock-image.png';
};

// 이미지 존재 여부를 확인하는 함수
const findImage = (basePath: string): Promise<string | undefined> => {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = basePath;

        img.onload = () => {
            resolve(basePath);
        };
        img.onerror = () => {
            resolve(undefined);
        };

        // 타임아웃 추가
        setTimeout(() => {
            resolve(undefined);
        }, 5000); // 5초 타임아웃
    });
};