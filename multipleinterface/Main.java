package multipleinterface;
interface Camera {
    void takePhoto();
}


interface MusicPlayer {
    void playMusic();
}


class SmartPhone implements Camera, MusicPlayer {

    public void takePhoto() {
        System.out.println("Photo taken using camera.");
    }

    public void playMusic() {
        System.out.println("Music is playing.");
    }
}


public class Main {
    public static void main(String[] args) {

        SmartPhone phone = new SmartPhone();

        phone.takePhoto();
        phone.playMusic();
    }
}
