import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
 
i18n
  .use(LanguageDetector)
  .init({
    resources: {
      ge: {
        translations: {
            "პროექტები":"პროექტები",
            "პროექტების არქივი":"პროექტების არქივი",
            "ჩვენი მიზანია აღმოვაჩინოთ და დავასაქმოთ რაც შეიძლება მეტი ადამიანი, გაზარდოთ კონკურენცია და მომსახურების ხარისხი,გავხადოთ ქართული ბაზარი მრავალფეროვანი და დავნერგოთ მისთვის ახალი ურთიერთობის ფორმა.":"ჩვენი მიზანია აღმოვაჩინოთ და დავასაქმოთ რაც შეიძლება მეტი ადამიანი, გაზარდოთ კონკურენცია და მომსახურების ხარისხი,გავხადოთ ქართული ბაზარი მრავალფეროვანი და დავნერგოთ მისთვის ახალი ურთიერთობის ფორმა.",
            "ძიება კატეგორიების მიხედვით":"ძიება კატეგორიების მიხედვით",
            "მიმდინარე პროექტები":"მიმდინარე პროექტები",
            "ჩემი პროფილი":"ჩემი პროფილი",
           

        }
      },
      en:{
          translations:{
            "პროექტები":"projects",
            "პროექტების არქივი":"project archive",
            "ჩვენი მიზანია აღმოვაჩინოთ და დავასაქმოთ რაც შეიძლება მეტი ადამიანი, გაზარდოთ კონკურენცია და მომსახურების ხარისხი, გავხადოთ ქართული ბაზარი მრავალფეროვანი და დავნერგოთ მისთვის ახალი ურთიერთობის ფორმა.": "Our aim is to discover and employ as many people as possible,to increase competition and service quality, to make georgian market diverse and to implement a new means of communication.",
            "ძიება კატეგორიების მიხედვით":"search by category",
            "მიმდინარე პროექტები":"current projects",
            "ჩემი პროფილი":"my profile",
        }
      }
    },
    fallbackLng: 'ge',
    debug: true,
 
  
    ns: ['translations'],
    defaultNS: 'translations',
 
    keySeparator: false,
 
    interpolation: {
      // escapeValue: false,
      formatSeparator: ','
    },
 
    react: {
      wait: true
    }
  });
 
export default i18n;