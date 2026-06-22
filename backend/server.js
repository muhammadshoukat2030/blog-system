const express = require('express');
const cors = require('cors');
const methodOverride = require('method-override');
const session = require('express-session');
const connectDB = require('./config/db');
const Blog = require('./models/Blog');

const app = express();

// Middlewares Setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Session Engine For Login Protection Middleware
app.use(session({
    secret: 'devzore_premium_secret_key_2026',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // 24 Hours Session Lock
}));

app.set('view engine', 'ejs');
app.set('views', './views');

// Connect Mongo Cluster
connectDB();

// Slug Automation Handler
const createSlug = (title) => {
    return title.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
};

// 🔒 AUTH GUARD MIDDLEWARE (Taake koi bina login kiye dashboard na khol sakay)
const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.isAdmin) {
        return next();
    }
    res.redirect('/dashboard/login');
};

// ==================== AUTHENTICATION PORTAL ROUTES ====================

// GET: Login Page View
app.get('/dashboard/login', (req, res) => {
    if (req.session.isAdmin) return res.redirect('/dashboard');
    res.render('login', { error: null });
});

// POST: Login Verification Form Endpoint
app.post('/dashboard/login', (req, res) => {
    const { username, password } = req.body;
    
    // Default Professional Security Standard Mock verification
    if (username === 'admin' && password === 'admin123') {
        req.session.isAdmin = true;
        return res.redirect('/dashboard');
    } else {
        res.render('login', { error: 'Invalid admin credentials assigned. Access Denied.' });
    }
});

// GET: Safe Logout Pipeline Termination
app.get('/dashboard/logout', (req, res) => {
    req.session.destroy((err) => {
        res.redirect('/dashboard/login');
    });
});

// ==================== EJS ADMIN SIDEBAR MULTI-PAGES ====================

// 1. PAGE ONE: Analytics Summary Engine (Dashboard Home Panel)
app.get('/dashboard', isAuthenticated, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        const totalViews = blogs.reduce((sum, b) => sum + (b.viewsCount || 0), 0);
        const totalLikes = blogs.reduce((sum, b) => sum + (b.likesCount || 0), 0);
        
        res.render('index', { blogs, totalViews, totalLikes, currentPage: 'overview' });
    } catch (err) {
        res.status(500).send("Dashboard load failure: " + err.message);
    }
});

// 2. PAGE TWO: All Published Content Listing Stream Feed
app.get('/dashboard/all-blogs', isAuthenticated, async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.render('all-blogs', { blogs, currentPage: 'all-blogs' });
    } catch (err) {
        res.status(500).send("Data ingestion pipeline error: " + err.message);
    }
});

// 3. PAGE THREE: Creation interface view shell
app.get('/dashboard/create', isAuthenticated, (req, res) => {
    res.render('create', { currentPage: 'create' });
});

// 4. CRUD CONTROLLER: Form post route storage
app.post('/dashboard', isAuthenticated, async (req, res) => {
    try {
        const { title, description, content, imageUrl, category, author } = req.body;
        await Blog.create({ title, slug: createSlug(title), description, content, imageUrl: imageUrl || undefined, category, author });
        res.redirect('/dashboard/all-blogs');
    } catch (err) {
        res.status(500).send("Database allocation error during save: " + err.message);
    }
});

// 5. CRUD CONTROLLER: Edit View form loader
app.get('/dashboard/edit/:id', isAuthenticated, async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) return res.status(404).send("Document not detected");
        res.render('edit', { blog, currentPage: 'all-blogs' });
    } catch (err) {
        res.status(500).send("ID tracking fault: " + err.message);
    }
});

// 6. CRUD CONTROLLER: PUT update database stream mutations
app.put('/dashboard/:id', isAuthenticated, async (req, res) => {
    try {
        const { title, description, content, imageUrl, category, author } = req.body;
        await Blog.findByIdAndUpdate(req.params.id, { title, slug: createSlug(title), description, content, imageUrl, category, author });
        res.redirect('/dashboard/all-blogs');
    } catch (err) {
        res.status(500).send("Update tracking constraint error: " + err.message);
    }
});

// 7. CRUD CONTROLLER: Permanent item deletion removal
app.delete('/dashboard/:id', isAuthenticated, async (req, res) => {
    try {
        await Blog.findByIdAndDelete(req.params.id);
        res.redirect('/dashboard/all-blogs');
    } catch (err) {
        res.status(500).send("Deletion sequence fault: " + err.message);
    }
});

// ==================== REACT DIGITAL MARKETING ENDPOINT API CHANNEL ====================

// Dynamic Get all articles list pipeline
app.get('/api/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Dynamic Incremental view calculation monitor target hits
app.get('/api/blogs/:id', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { viewsCount: 1 } }, { new: true });
        if (!blog) return res.status(404).json({ message: "Item Absent" });
        res.json(blog);
    } catch (err) {
        res.status(500).json({ message: "Corrupted structure query payload: " + err.message });
    }
});

// Like Button increments trigger endpoint
app.post('/api/blogs/:id/like', async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, { $inc: { likesCount: 1 } }, { new: true });
        res.json({ success: true, likesCount: blog.likesCount });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Production Core Activated: http://localhost:${PORT}/dashboard`));