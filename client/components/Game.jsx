import React, { useState, useEffect, useRef } from 'react'

import data from './data.js'

function Game() {

    window.addEventListener("keydown", checkKeyDown, false)
    window.addEventListener("keyup", checkKeyUp, false,)
    var deltaX = 0
    var deltaY = 0

    const ball = data.ball
    const paddle = data.paddle
    const gameWidth = 800
    const gameHeight = 500
    // const gameHeight = document.documentElement.clientHeight
    const canvasRef = useRef(null)

    function checkKeyDown(e) {
        switch (e.key) {
            case "ArrowRight":
                paddle.moveRight = true
                e.preventDefault()

                // deltaX = Math.max(paddle.x - 20, -170)
                break
            case "ArrowLeft":
                paddle.moveLeft = true
                e.preventDefault()

                // deltaX = Math.min(paddle.x + 20, gameWidth - 230)
                break
        }
        // e.preventDefault()
    }

    function checkKeyUp(e) {
        switch (e.key) {
            case "ArrowRight":
                paddle.moveRight = false
                // deltaX = Math.max(paddle.x - 20, -170)
                break
            case "ArrowLeft":
                paddle.moveLeft = false
                // deltaX = Math.min(paddle.x + 20, gameWidth - 230)
                break
        }
        // e.preventDefault()
    }

    useEffect(() => {
        const render = () => {
            //establish context
            const canvas = canvasRef.current
            const c = canvas.getContext("2d")

            //clear canvas
            c.clearRect(0, 0, canvas.width, canvas.height)

            //draw ball
            c.beginPath()
            c.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI)
            c.fill()
            ball.x += ball.xSpeed
            ball.y += ball.ySpeed

            // move paddle
            if (paddle.x + 30 <= gameWidth && paddle.moveRight) paddle.x += 6
            if (paddle.x - 30 >= 0 && paddle.moveLeft) paddle.x -= 6

            //check ball dying
            if (ball.y + ball.r >= canvas.height) {

                //call function to save name if high score
                //prompt to start new game
                function itReset() {
                    var erase = confirm("New Game?");
                    if (erase == true) {
                        c.clearRect(0, 0, canvas.width, canvas.height);
                        ball.x = 50;
                        ball.y = 50;
                        paddle.x = innerWidth / 2;
                        paddle.moveRight = false;
                        paddle.moveLeft = false;
                    } else {
                        ball.xSpeed = 0;
                        ball.ySpeed = 0;
                        ball.y = canvas.height - ball.r - 1
                    }
                }
                itReset()

            }
            else {
                //check ball collision
                if (ball.x + ball.r >= canvas.width || ball.x - ball.r <= 0)
                    ball.xSpeed = -ball.xSpeed
                if (ball.y - ball.r <= 0)
                    ball.ySpeed = -ball.ySpeed
                if (
                    ball.x - ball.r <= paddle.x + paddle.w &&
                    ball.x + ball.r >= paddle.x - paddle.w &&
                    ball.y + ball.r >= paddle.y - 10
                ) {
                    ball.ySpeed = -ball.ySpeed
                }
            }

            //draw paddle
            c.beginPath()
            c.lineTo(paddle.x - paddle.w, paddle.y)
            c.lineTo(paddle.x + paddle.w, paddle.y)
            c.closePath()
            c.lineWidth = 10
            c.strokeStyle = "rgba(102, 102, 102, 1)"
            c.stroke()

            requestAnimationFrame(render)
        }
        render()
    }, [])
    return (
        <>
            <canvas ref={canvasRef} className="gameCanvas" width={gameWidth} height={gameHeight}></canvas>
        </>
    )
}

export default Game



