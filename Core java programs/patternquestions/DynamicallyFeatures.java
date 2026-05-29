package patternquestions;

public class DynamicallyFeatures {
	
    public static void main(String[] args) {
    	
    	File file = new Logging(new Encryption(new Compression(new SimpleFile())));



        file.read();
    }
}


	    interface File { void read(); }

	     class SimpleFile implements File {
	        public void read() { System.out.println("Read File"); }
	    }

	     class Decorator implements File {
	        File f;
	        Decorator(File f){ this.f = f; }
	        public void read(){ f.read(); }
	    }

	     class Compression extends Decorator {
	        Compression(File f){ super(f); }
	        public void read(){ super.read(); System.out.println("Compress"); }
	    }

	     class Encryption extends Decorator {
	        Encryption(File f){ super(f); }
	        public void read(){ super.read(); System.out.println("Encrypt"); }
	    }

	     class Logging extends Decorator {
	        Logging(File f){ super(f); }
	        public void read(){ super.read(); System.out.println("Log"); }
	    }

//	    public static void main(String[] args) {
//	    	
//	    	File file = new Logging(new Encryption(new Compression(new SimpleFile())));
//
//
//
//	        file.read();
//	    }
//	}