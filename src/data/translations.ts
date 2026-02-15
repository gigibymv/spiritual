export type Language = "fr" | "en"

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Header
    "header.title": "Parole & Lumière",
    "header.subtitle": "Votre guide spirituel personnel",
    "header.journal": "Journal",
    "header.favorites": "Favoris",
    "header.login": "Connexion",

    // Welcome
    "welcome.subtitle":
      "Partagez ce qui vous préoccupe et laissez-nous trouver des versets qui vous apporteront des réponses",

    // Greeting
    "greeting.morning":
      "Bonjour. Que la lumière de ce matin éclaire votre cœur.",
    "greeting.afternoon": "Bonjour. Prenez un moment pour vous confier.",
    "greeting.evening":
      "Bonsoir. Laissez la Parole de Dieu apaiser votre soirée.",

    // Input
    "input.placeholder": "Parlez-moi de ce que vous vivez...",
    "input.button": "Que dit la Parole de Dieu sur ma situation ?",
    "input.clear": "Effacer",

    // Thinking
    "thinking.message": "Je cherche dans la Parole pour vous...",

    // Pastoral response
    "back.home": "Retour à l'accueil",
    "response.writePrayer": "Écrire une prière dans votre journal",
    "response.peace": "Que la paix soit avec vous",
    "response.noResults":
      "Je n'ai pas trouvé de situation correspondant exactement à votre recherche, mais sachez que Dieu entend chaque prière, même celles que nous ne savons pas formuler. N'hésitez pas à reformuler votre question ou à explorer les suggestions proposées.",

    // Verse card
    "verse.recommended": "Recommandé",
    "verse.addFavorite": "Ajouter aux favoris",
    "verse.removeFavorite": "Retirer des favoris",
    "verse.hideExplanation": "Masquer l'explication ↑",
    "verse.showExplanation": "Lire l'explication →",
    "verse.understand": "Comprendre ce verset",
    "verse.apply": "Comment l'appliquer",
    "verse.copied": "Copié",
    "verse.copy": "Copier",
    "verse.share": "Partager",
    "verse.writePrayer": "Écrire une prière",

    // Verse of day
    "verseOfDay.title": "Verset du jour",

    // Favorites
    "favorites.title": "Favoris",
    "favorites.empty": "Aucun verset sauvegardé",
    "favorites.emptyHint":
      "Cliquez sur le signet d'un verset pour le sauvegarder",
    "favorites.remove": "Supprimer",

    // Journal
    "journal.title": "Journal de prière",
    "journal.newPrayer": "Nouvelle prière",
    "journal.empty": "Votre journal est vide",
    "journal.emptyHint": "Commencez à écrire vos prières et réflexions",
    "journal.editPrayer": "Modifier la prière",
    "journal.writePrayer": "Écrire une prière",
    "journal.titlePlaceholder": "Titre (optionnel)",
    "journal.contentPlaceholder":
      "Écrivez votre prière, réflexion ou pensée...",
    "journal.moodQuestion": "Comment vous sentez-vous ?",
    "journal.linkedVerse": "Verset lié (optionnel)",
    "journal.versePlaceholder": "Ex: Jean 3:16",
    "journal.cancel": "Annuler",
    "journal.save": "Sauvegarder",
    "journal.update": "Enregistrer",
    "journal.edit": "Modifier",
    "journal.delete": "Supprimer",

    // Moods
    "mood.gratitude": "Gratitude",
    "mood.peace": "Paix",
    "mood.struggle": "Combat",
    "mood.hope": "Espérance",
    "mood.praise": "Louange",

    // Search history
    "history.conversations": "Conversations",
    "history.clearHistory": "Effacer l'historique",
    "history.recent": "Récentes",
    "history.collapse": "Réduire",
    "history.showMore": "Voir plus",
    "history.justNow": "À l'instant",
    "history.verse": "verset",
    "history.verses": "versets",

    // Auth
    "auth.signIn": "Se connecter",
    "auth.signUp": "Créer un compte",
    "auth.email": "Adresse e-mail",
    "auth.password": "Mot de passe",
    "auth.checkEmail":
      "Vérifiez votre e-mail pour confirmer votre compte.",
    "auth.signInButton": "Se connecter",
    "auth.signUpButton": "Créer mon compte",
    "auth.noAccount": "Pas encore de compte ? Créer un compte",
    "auth.hasAccount": "Déjà un compte ? Se connecter",

    // Suggestions
    "suggestion.1": "Je me sens anxieux",
    "suggestion.2": "J'ai besoin de pardonner",
    "suggestion.3": "Je traverse un deuil",
    "suggestion.4": "Je cherche un sens à ma vie",
    "suggestion.5": "J'ai peur de l'avenir",
    "suggestion.6": "Je suis en conflit avec quelqu'un",
    "suggestion.7": "Je doute de ma foi",
    "suggestion.8": "J'ai des difficultés financières",
    "suggestion.9": "Je me sens seul",
    "suggestion.10": "Je lutte contre une tentation",
    "suggestion.11": "Je suis triste et découragé",
    "suggestion.12": "J'ai besoin de prendre une décision",
    "suggestion.13": "Je suis jaloux de quelqu'un",
    "suggestion.14": "Je ressens de l'envie",
    "suggestion.15": "Je vis une injustice",
    "suggestion.16": "Je suis en colère",

    // Footer
    "footer.translation": "Traduction Louis Segond (1910) — Domaine public",
    "footer.curated": "Base curatée et vérifiée",

    // Personalized intro
    "intro.youMention": "Vous parlez de",
    "intro.andThisFeelingIsHuman": "et ce sentiment est profondément humain.",
    "intro.versesNote": "",
  },
  en: {
    // Header
    "header.title": "Parole & Lumière",
    "header.subtitle": "Your personal spiritual guide",
    "header.journal": "Journal",
    "header.favorites": "Favorites",
    "header.login": "Sign in",

    // Welcome
    "welcome.subtitle":
      "Share what's on your heart and let us find Bible verses that will bring you answers",

    // Greeting
    "greeting.morning":
      "Good morning. May the light of this morning shine in your heart.",
    "greeting.afternoon":
      "Good afternoon. Take a moment to share what's on your mind.",
    "greeting.evening":
      "Good evening. Let God's Word bring peace to your evening.",

    // Input
    "input.placeholder": "Tell me what you're going through...",
    "input.button": "What does God's Word say about my situation?",
    "input.clear": "Clear",

    // Thinking
    "thinking.message": "Searching the Word for you...",

    // Pastoral response
    "back.home": "Back to home",
    "response.writePrayer": "Write a prayer in your journal",
    "response.peace": "May peace be with you",
    "response.noResults":
      "I couldn't find an exact match for your search, but know that God hears every prayer, even those we can't put into words. Feel free to rephrase your question or explore the suggested topics.",

    // Verse card
    "verse.recommended": "Recommended",
    "verse.addFavorite": "Add to favorites",
    "verse.removeFavorite": "Remove from favorites",
    "verse.hideExplanation": "Hide explanation ↑",
    "verse.showExplanation": "Read explanation →",
    "verse.understand": "Understanding this verse",
    "verse.apply": "How to apply it",
    "verse.copied": "Copied",
    "verse.copy": "Copy",
    "verse.share": "Share",
    "verse.writePrayer": "Write a prayer",

    // Verse of day
    "verseOfDay.title": "Verse of the day",

    // Favorites
    "favorites.title": "Favorites",
    "favorites.empty": "No saved verses",
    "favorites.emptyHint": "Click the bookmark icon on a verse to save it",
    "favorites.remove": "Remove",

    // Journal
    "journal.title": "Prayer journal",
    "journal.newPrayer": "New prayer",
    "journal.empty": "Your journal is empty",
    "journal.emptyHint": "Start writing your prayers and reflections",
    "journal.editPrayer": "Edit prayer",
    "journal.writePrayer": "Write a prayer",
    "journal.titlePlaceholder": "Title (optional)",
    "journal.contentPlaceholder":
      "Write your prayer, reflection or thought...",
    "journal.moodQuestion": "How are you feeling?",
    "journal.linkedVerse": "Linked verse (optional)",
    "journal.versePlaceholder": "E.g. John 3:16",
    "journal.cancel": "Cancel",
    "journal.save": "Save",
    "journal.update": "Update",
    "journal.edit": "Edit",
    "journal.delete": "Delete",

    // Moods
    "mood.gratitude": "Gratitude",
    "mood.peace": "Peace",
    "mood.struggle": "Struggle",
    "mood.hope": "Hope",
    "mood.praise": "Praise",

    // Search history
    "history.conversations": "Conversations",
    "history.clearHistory": "Clear history",
    "history.recent": "Recent",
    "history.collapse": "Collapse",
    "history.showMore": "Show more",
    "history.justNow": "Just now",
    "history.verse": "verse",
    "history.verses": "verses",

    // Auth
    "auth.signIn": "Sign in",
    "auth.signUp": "Create account",
    "auth.email": "Email address",
    "auth.password": "Password",
    "auth.checkEmail": "Check your email to confirm your account.",
    "auth.signInButton": "Sign in",
    "auth.signUpButton": "Create my account",
    "auth.noAccount": "No account yet? Create one",
    "auth.hasAccount": "Already have an account? Sign in",

    // Suggestions (kept in French — search keywords are French)
    "suggestion.1": "Je me sens anxieux",
    "suggestion.2": "J'ai besoin de pardonner",
    "suggestion.3": "Je traverse un deuil",
    "suggestion.4": "Je cherche un sens à ma vie",
    "suggestion.5": "J'ai peur de l'avenir",
    "suggestion.6": "Je suis en conflit avec quelqu'un",
    "suggestion.7": "Je doute de ma foi",
    "suggestion.8": "J'ai des difficultés financières",
    "suggestion.9": "Je me sens seul",
    "suggestion.10": "Je lutte contre une tentation",
    "suggestion.11": "Je suis triste et découragé",
    "suggestion.12": "J'ai besoin de prendre une décision",
    "suggestion.13": "Je suis jaloux de quelqu'un",
    "suggestion.14": "Je ressens de l'envie",
    "suggestion.15": "Je vis une injustice",
    "suggestion.16": "Je suis en colère",

    // Footer
    "footer.translation": "Louis Segond Translation (1910) — Public domain",
    "footer.curated": "Curated and verified database",

    // Personalized intro
    "intro.youMention": "You're speaking about",
    "intro.andThisFeelingIsHuman":
      "and this feeling is deeply human.",
    "intro.versesNote":
      "Verses are shown in French (Louis Segond translation).",
  },
}
