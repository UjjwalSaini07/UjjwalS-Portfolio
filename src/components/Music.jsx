import React, { useState, useRef } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Equalizer from "./Equalizer.jsx";
import Audio1 from "../components/Assest_Used/Sounds/Music/Audio1_LMK.mp3";
import Audio2 from "../components/Assest_Used/Sounds/Music/Audio2_EDEyeClosed.mp3";
import Audio3 from "../components/Assest_Used/Sounds/Music/Audio3_AWAlone.mp3";
import Audio4 from "../components/Assest_Used/Sounds/Music/Audio4_EDShape.mp3";
import Audio5 from "../components/Assest_Used/Sounds/Music/Audio5_AWFaded.mp3";

const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(Audio1);
  const audioRef = useRef(null);
  const clickTimeout = useRef(null);

  // const correctPassword = "ujjwal";

  const handleMusicPlay = async () => {
    if (!isAuthenticated) {
      Swal.fire(
        `Music is playing.<br/> Double Tap on MusicNode to get the next song.`
      );
      setIsAuthenticated(true);
      setIsPlaying(true);
      audioRef.current.play();
      audioRef.current.volume = 0.4;
    } else {
      handleDoubleClick();
    }
  };
  // todo: validate with the password
  // const handleMusicPlay = async () => {
  //   if (!isAuthenticated) {
  //     const { value: password } = await Swal.fire({
  //       title: "Enter your password",
  //       input: "password",
  //       inputLabel: "Password",
  //       inputPlaceholder: "Enter your password",
  //       customClass: {
  //         popup: "swal-custom-popup",
  //         title: "swal-custom-title",
  //         input: "swal-custom-input",
  //         confirmButton: "swal-custom-button",
  //       },
  //       inputAttributes: {
  //         maxlength: "10",
  //         autocapitalize: "off",
  //         autocorrect: "off",
  //       },
  //       willOpen: () => {
  //         document.body.style.overflow = "hidden"; // Disable scroll
  //       },
  //       willClose: () => {
  //         document.body.style.overflow = "auto"; // Restore scroll
  //       },
  //     });

  //     if (password) {
  //       if (password === correctPassword) {
  //         Swal.fire(
  //           `Password correct!<br/> Music is playing.<br/> Double Tap on MusicNode to get the next song.`
  //         );
  //         setIsAuthenticated(true);
  //         setIsPlaying(true);
  //         audioRef.current.play();
  //         audioRef.current.volume = 0.4;
  //       } else {
  //         Swal.fire(
  //           `Incorrect password.<br/>Try again.<br/> You Entered: ${password}<br/>Hint: Something Special!!`
  //         );
  //       }
  //     }
  //   } else {
  //     handleDoubleClick();
  //   }
  // };

  const handleDoubleClick = () => {
    if (clickTimeout.current) {
      setNextAudio();
      clearTimeout(clickTimeout.current);
      clickTimeout.current = null;
    } else {
      clickTimeout.current = setTimeout(() => {
        clickTimeout.current = null;
        togglePlayPause();
      }, 300);
    }
  };

  const setNextAudio = () => {
    setCurrentAudio((prevAudio) => {
      const audioArray = [Audio1, Audio2, Audio3, Audio4, Audio5];
      const currentIndex = audioArray.indexOf(prevAudio); // Get the current audio index
      const nextIndex = (currentIndex + 1) % audioArray.length; // Calculate the next index (cycle back to 0 after 4)
      return audioArray[nextIndex]; // Setting the next audio
    });
    setIsPlaying(true);

    // Remove any previous event listener before adding a new one
    audioRef.current.removeEventListener(
      "canplaythrough",
      handlePlayAfterLoad
    );

    // Add an event listener to play the audio only once it's ready
    audioRef.current.addEventListener("canplaythrough", handlePlayAfterLoad);
    audioRef.current.load(); // Load the new audio source
  };

  // Function to handle playback after loading
  const handlePlayAfterLoad = () => {
    audioRef.current.play();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div>
      <button
        onClick={handleMusicPlay}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ color: "#fff" }}
      >
        {isPlaying ? (
          isHovering ? (
            <i
              className="bi bi-pause"
              style={{ cursor: "pointer", fontSize: "24px", color: "#fff" }}
            ></i>
          ) : (
            <Equalizer
              style={{
                cursor: "pointer",
                width: "24px",
                height: "26px",
                color: "#fff",
                display: "flex",
                alignItems: "center",
              }}
            />
          )
        ) : (
          <i
            className="bi bi-music-note-beamed"
            style={{ cursor: "pointer", fontSize: "24px", color: "#fff" }}
          ></i>
        )}
      </button>

      <audio
        ref={audioRef}
        src={currentAudio}
        onEnded={setNextAudio} // Automatically set the next audio when the current one ends
      />
      <style jsx>{`
        .swal-custom-title {
          font-size: 2.2rem;
        }
        .swal-custom-input {
          font-size: 1.2em;
          padding: 10px;
        }
        .swal-custom-button {
          font-size: 1.2em;
          padding: 10px 20px;
        }
      `}</style>
    </div>
  );
};

export default Music;
