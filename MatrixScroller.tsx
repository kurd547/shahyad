import React from 'react'

function MatrixScroller() {
    return (
        <div className='w-full h-full absolute'>
            <div className="absolute overflow-hidden -left-20 rotate-20 w-[2000px] bottom-20 bg-black h-6">
                <div
                    style={{ animation: "scroll 33s linear infinite" }}
                    className="inline-block whitespace-nowrap flex-nowrap absolute text-blue-700"
                >
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ60101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                    </span>
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                    </span>
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ660101001001
                    </span>
                </div>
                <style>
                    {`
                    @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }}`}
                </style>
            </div>

            <div className="absolute overflow-hidden -right-20 -rotate-20 w-[2000px] bottom-20 bg-black h-6">
                <div
                    style={{ animation: "scroll 33s linear infinite" }}
                    className="inline-block whitespace-nowrap flex-nowrap absolute text-blue-700"
                >
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                    </span>
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                    </span>
                    <span>
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                        Aカ3タBナ7ハマ9ヤラ2ワ0X1CアV5Bナタ8サM4ワYハアZ7ラ9カ3タマ6
                    </span>
                </div>
                <style>
                    {`
      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
    `}
                </style>
            </div>
        </div>
    )
}

export default MatrixScroller
